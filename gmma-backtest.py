import pandas as pd
import numpy as np
import yfinance as yf
import datetime as dt
from pandas_datareader import data as pdr

yf.pdr_override()

stock=input("Enter a stock ticker symbol: ")
print(stock)

startyear=2020
startmonth=1
startday=1

start=dt.datetime(startyear,startmonth,startday)

now=dt.datetime.now()

df=pdr.get_data_yahoo(stock,start,now)

# ma=50

# smaString="sma_"+str(ma)

# df[smaString]=df.iloc[:,4].rolling(window=ma).mean()

emasUsed=[3,5,8,10,12,15,30,35,40,45,50,60]
for x in emasUsed:
    ema=x
    df["Ema_"+str(ema)]=round(df.iloc[:,4].ewm(span=ema, adjust=False).mean(),2)

print(df.tail())

position=0
num=0
percentChange=[]

for i in df.index:
    cmin=min(df["Ema_3"][i],df["Ema_5"][i],df["Ema_8"][i],df["Ema_10"][i],df["Ema_12"][i],df["Ema_15"][i])
    cmax=max(df["Ema_30"][i],df["Ema_35"][i],df["Ema_40"][i],df["Ema_45"][i],df["Ema_50"][i],df["Ema_60"][i])

    close=df["Adj Close"][i]

    if(cmin>cmax):
        print("Red White Blue")
        if(position==0):
            buyPrice=close
            position=1
            print("Buy now at "+str(buyPrice))

    elif(cmin<cmax):
        print("Blue White Red")
        if(position==1):
            position=0
            sellPrice=close
            print("Sell now at "+str(sellPrice))
            pc=(sellPrice/buyPrice-1)*100
            percentChange.append(pc)

    if(num==df["Adj Close"].count()-1 and position==1):
        position=0
        sellPrice=close
        print("Sell now at "+str(sellPrice))
        pc=(sellPrice/buyPrice-1)*100
        percentChange.append(pc)

    num+=1

print(percentChange)


