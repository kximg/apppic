var play_arr = new Array(
'https://vod3.bdzybf3.com/20201228/oP9HBS2G/index.m3u8',
'https://vod3.bdzybf3.com/20201228/2fvEYdcf/index.m3u8',
'https://vod3.bdzybf3.com/20201227/NmtXNGo1/index.m3u8',
'https://vod3.bdzybf3.com/20201227/8TaknFIe/index.m3u8',
'https://vod3.bdzybf3.com/20201227/t6Hax5rS/index.m3u8',
'https://vod2.bdzybf2.com/20201224/TYvdEH7v/index.m3u8',
'https://vod3.bdzybf3.com/20201227/KfRwWGHC/index.m3u8',
'https://vod3.bdzybf3.com/20201227/KeSKjH3i/index.m3u8',
'https://vod2.bdzybf2.com/20201225/QyKOj306/index.m3u8',
'https://vod3.bdzybf3.com/20201224/EY2QalRJ/index.m3u8',
'https://vod1.bdzybf1.com/20200831/FftJZe6q/index.m3u8',
'https://vod1.bdzybf1.com/20200919/6ct0dTEE/index.m3u8',
'https://vod1.bdzybf1.com/20200924/DmLj4VUf/index.m3u8',
'https://vod3.bdzybf3.com/20201224/ekxVA1jw/index.m3u8',
'https://vod3.bdzybf3.com/20201224/phqpOChR/index.m3u8',
'https://vod1.bdzybf1.com/20200831/s2BnOC88/index.m3u8',
'https://vod1.bdzybf1.com/20200831/s2BnOC88/index.m3u8',
'https://vod3.bdzybf3.com/20201223/2WmGoOwy/index.m3u8',
'https://vod1.bdzybf1.com/20200913/HvT8iK6k/index.m3u8',
'https://vod1.bdzybf1.com/20200920/8X7MuWuK/index.m3u8',
'https://vod2.bdzybf2.com/20201222/N4OBep9i/index.m3u8',
'https://vod3.bdzybf3.com/20201220/GeaADCMI/index.m3u8',
'https://vod3.bdzybf3.com/20201222/ZDByzdQM/index.m3u8',
'https://vod3.bdzybf3.com/20201222/bCFWT5PD/index.m3u8',
'https://vod3.bdzybf3.com/20201222/fGE2TWdR/index.m3u8',
'https://vod3.bdzybf3.com/20201222/bVMX4Uu2/index.m3u8',
'https://vod3.bdzybf3.com/20201220/TtjbN44G/index.m3u8',
'https://vod3.bdzybf3.com/20201220/qK3YpEhG/index.m3u8',
'https://vod3.bdzybf3.com/20201220/ZOj9RZJn/index.m3u8',
'https://vod3.bdzybf3.com/20201220/amBRbUQ1/index.m3u8',
'https://vod3.bdzybf3.com/20201220/V0hlE1K2/index.m3u8',
'https://vod3.bdzybf3.com/20201220/hHMSby6s/index.m3u8',
'https://vod3.bdzybf3.com/20201220/VucfTNRk/index.m3u8',
'https://vod3.bdzybf3.com/20201221/tDV2rIsW/index.m3u8',
'https://vod3.bdzybf3.com/20201220/6GWNlCej/index.m3u8',
'https://vod2.bdzybf2.com/20201219/DlB4eIia/index.m3u8',
'https://vod2.bdzybf2.com/20201219/2hTUgwqi/index.m3u8',
'https://vod2.bdzybf2.com/20201219/tLn1EiGQ/index.m3u8',
'https://vod2.bdzybf2.com/20201220/5dqbgkXt/index.m3u8',
'https://vod2.bdzybf2.com/20201220/QTatuQcn/index.m3u8',
'https://vod2.bdzybf2.com/20201220/sTxiNC0Z/index.m3u8',
'https://vod2.bdzybf2.com/20201220/my4DgDaz/index.m3u8',
'https://vod2.bdzybf2.com/20201220/OMBDjOQE/index.m3u8',
'https://vod3.bdzybf3.com/20201220/dhIpzQ9p/index.m3u8',
'https://vod3.bdzybf3.com/20201220/YH9MzHq4/index.m3u8',
'https://vod3.bdzybf3.com/20201220/R8yiyd71/index.m3u8',
'https://vod3.bdzybf3.com/20201217/HVJPY8Lf/index.m3u8',
'https://vod2.bdzybf2.com/20201218/TwfpEAeI/index.m3u8',
'https://vod3.bdzybf3.com/20201216/3oVwESfk/index.m3u8',
'https://vod2.bdzybf2.com/20201214/HOTBuKzS/index.m3u8',
'https://vod2.bdzybf2.com/20201214/U4a2xbyQ/index.m3u8',
'https://vod3.bdzybf3.com/20201214/JFoUDkXs/index.m3u8',
'https://vod3.bdzybf3.com/20201214/grvnaNqx/index.m3u8',
'https://vod3.bdzybf3.com/20201211/YOeF432k/index.m3u8',
'https://vod3.bdzybf3.com/20201211/QbG5bCVK/index.m3u8',
'https://vod2.bdzybf2.com/20201213/bZ0K7k42/index.m3u8',
'https://vod2.bdzybf2.com/20201214/zkeUgHCa/index.m3u8',
'https://vod3.bdzybf3.com/20201213/MiSGM09U/index.m3u8',
'https://vod3.bdzybf3.com/20201213/vWBp1lkM/index.m3u8',
'https://vod3.bdzybf3.com/20201213/nZO2N4AV/index.m3u8',
'https://vod3.bdzybf3.com/20201213/fmRC4Dtr/index.m3u8',
'https://vod3.bdzybf3.com/20201213/5VUu53MJ/index.m3u8',
'https://vod3.bdzybf3.com/20201213/TwLv1vLR/index.m3u8',
'https://vod3.bdzybf3.com/20201213/ntTvi20y/index.m3u8',
'https://vod3.bdzybf3.com/20201213/bYTcDCxH/index.m3u8',
'https://vod3.bdzybf3.com/20201213/YUPTaure/index.m3u8',
'https://vod3.bdzybf3.com/20201213/nmFTEKKM/index.m3u8',
'https://vod3.bdzybf3.com/20201213/KL2VEo9K/index.m3u8',
'https://vod3.bdzybf3.com/20201211/b5jNv1Gm/index.m3u8',
'https://vod2.bdzybf2.com/20201211/NxvGAWcS/index.m3u8',
'https://vod2.bdzybf2.com/20201211/nftPoh7X/index.m3u8',
'https://vod2.bdzybf2.com/20201211/QU469IX9/index.m3u8',
'https://vod2.bdzybf2.com/20201211/Mx4Z7FQJ/index.m3u8',
'https://vod2.bdzybf2.com/20201211/qZ9cT2Yz/index.m3u8',
'https://vod3.bdzybf3.com/20201211/9OS1PIiG/index.m3u8',
'https://vod3.bdzybf3.com/20201212/Vxkr0cqj/index.m3u8',
'https://vod3.bdzybf3.com/20201212/j5wRL4OV/index.m3u8',
'https://vod2.bdzybf2.com/20201211/bEDVIG86/index.m3u8',
'https://vod2.bdzybf2.com/20201211/OLlk2vZc/index.m3u8',
'https://vod2.bdzybf2.com/20201211/RZVoRR2V/index.m3u8',
'https://vod3.bdzybf3.com/20201211/x6PIPhBO/index.m3u8',
'https://vod3.bdzybf3.com/20201211/YQnVFwQ6/index.m3u8',
'https://vod3.bdzybf3.com/20201211/I2QSBbAX/index.m3u8',
'https://vod3.bdzybf3.com/20201211/yw6hSPV5/index.m3u8',
'https://vod3.bdzybf3.com/20201211/dhv47vBJ/index.m3u8',
'https://vod3.bdzybf3.com/20201211/cV9y2VML/index.m3u8',
'https://vod3.bdzybf3.com/20201211/HIrKufBf/index.m3u8',
'https://vod3.bdzybf3.com/20201211/Ew7zQ3Nc/index.m3u8',
'https://vod3.bdzybf3.com/20201211/PjW9S3vW/index.m3u8',
'https://vod3.bdzybf3.com/20201206/5PgsQDk6/index.m3u8',
'https://vod2.bdzybf2.com/20201209/rjo2axh7/index.m3u8',
'https://vod2.bdzybf2.com/20201209/cJKUi5t0/index.m3u8',
'https://vod2.bdzybf2.com/20201210/GbRR2RvF/index.m3u8',
'https://vod2.bdzybf2.com/20201210/9lsRRqbO/index.m3u8',
'https://vod2.bdzybf2.com/20201210/2taxRIaT/index.m3u8',
'https://vod2.bdzybf2.com/20201210/0jMtXEMb/index.m3u8',
'https://vod2.bdzybf2.com/20201210/AKhIYazC/index.m3u8',
'https://vod2.bdzybf2.com/20201210/WvPmwTNQ/index.m3u8',
'https://vod3.bdzybf3.com/20201210/CbOqTT79/index.m3u8',
'https://vod3.bdzybf3.com/20201210/BlCaq8MB/index.m3u8',
'https://vod3.bdzybf3.com/20201210/fykMfgNE/index.m3u8',
'https://vod3.bdzybf3.com/20201210/9gt6Y4u3/index.m3u8',
'https://vod3.bdzybf3.com/20201210/lbI0Shd7/index.m3u8',
'https://vod3.bdzybf3.com/20201210/DmmjccyX/index.m3u8',
'https://vod3.bdzybf3.com/20201210/DaV1iFSX/index.m3u8',
'https://vod3.bdzybf3.com/20201210/DilnDIL6/index.m3u8',
'https://vod3.bdzybf3.com/20201206/d0Rpnn4f/index.m3u8',
'https://vod3.bdzybf3.com/20201206/SpHxOqJr/index.m3u8',
'https://vod3.bdzybf3.com/20201206/s8sUYVzF/index.m3u8',
'https://vod3.bdzybf3.com/20210116/avZ6YhKR/index.m3u8',
'https://vod2.bdzybf2.com/20201206/4ohrotPT/index.m3u8',
'https://vod2.bdzybf2.com/20201206/wEklQ3tA/index.m3u8',
'https://vod2.bdzybf2.com/20201206/yBz2dcde/index.m3u8',
'https://vod2.bdzybf2.com/20201207/Ko7x7RHB/index.m3u8',
'https://vod3.bdzybf3.com/20201209/K3yJ9jP7/index.m3u8',
'https://vod3.bdzybf3.com/20201209/l8DueRTt/index.m3u8',
'https://vod3.bdzybf3.com/20201209/dl1M44OI/index.m3u8',
'https://vod3.bdzybf3.com/20201209/A9pdskOB/index.m3u8',
'https://vod3.bdzybf3.com/20201209/1ipmf9Sb/index.m3u8',
'https://vod3.bdzybf3.com/20201209/BgOELs4C/index.m3u8',
'https://vod3.bdzybf3.com/20201209/KRb82CzW/index.m3u8',
'https://vod3.bdzybf3.com/20201208/dab9d0xZ/index.m3u8',
'https://vod3.bdzybf3.com/20201208/JKDe7YkI/index.m3u8',
'https://vod3.bdzybf3.com/20201208/x2yU8t5X/index.m3u8',
'https://vod3.bdzybf3.com/20201203/UK8JB64C/index.m3u8',
'https://vod2.bdzybf2.com/20201207/jJndktOK/index.m3u8',
'https://vod2.bdzybf2.com/20201207/nzYq6mLw/index.m3u8',
'https://vod2.bdzybf2.com/20201206/4tHVnTts/index.m3u8',
'https://vod2.bdzybf2.com/20201207/HcUIHssx/index.m3u8',
'https://vod3.bdzybf3.com/20201207/t2BiC9EP/index.m3u8',
'https://vod3.bdzybf3.com/20201207/f3GIEM2f/index.m3u8',
'https://vod3.bdzybf3.com/20201207/KbwuSWt6/index.m3u8',
'https://vod3.bdzybf3.com/20201206/UWEfb5yJ/index.m3u8',
'https://vod3.bdzybf3.com/20201206/HgRSsQhf/index.m3u8',
'https://vod3.bdzybf3.com/20201206/vqcan7SL/index.m3u8',
'https://vod3.bdzybf3.com/20201206/K4ypTdgD/index.m3u8',
'https://vod3.bdzybf3.com/20201206/ovpgWUwD/index.m3u8',
'https://vod3.bdzybf3.com/20201206/ptotkG9Z/index.m3u8',
'https://vod2.bdzybf2.com/20201205/0Sv1W1TF/index.m3u8',
'https://vod2.bdzybf2.com/20201205/G8VNwsKP/index.m3u8',
'https://vod2.bdzybf2.com/20201205/sdkRsdfn/index.m3u8',
'https://vod3.bdzybf3.com/20201204/CwYs4BGN/index.m3u8',
'https://vod3.bdzybf3.com/20201203/6ylEFo5a/index.m3u8',
'https://vod3.bdzybf3.com/20201203/oZ3PKayV/index.m3u8',
'https://vod3.bdzybf3.com/20201203/JiXVb0Ja/index.m3u8',
'https://vod3.bdzybf3.com/20201203/jpxO4KHz/index.m3u8',
'https://vod3.bdzybf3.com/20201126/TgbHGzRl/index.m3u8',
'https://vod2.bdzybf2.com/20201203/uc8DT1yn/index.m3u8',
'https://vod2.bdzybf2.com/20201203/yMUkE9LG/index.m3u8',
'https://vod2.bdzybf2.com/20201203/dTh4AFrG/index.m3u8',
'https://vod2.bdzybf2.com/20201203/IrSQ3Uly/index.m3u8',
'https://vod2.bdzybf2.com/20201130/ETpVYpBy/index.m3u8',
'https://vod2.bdzybf2.com/20201130/LuculPK6/index.m3u8',
'https://vod3.bdzybf3.com/20201130/NHC3ucfT/index.m3u8',
'https://vod3.bdzybf3.com/20201130/PozjCQ6p/index.m3u8',
'https://vod3.bdzybf3.com/20201130/J86t9zH8/index.m3u8',
'https://vod2.bdzybf2.com/20201130/W0IUQOmK/index.m3u8',
'https://vod3.bdzybf3.com/20201126/ve3KERJy/index.m3u8',
'https://vod3.bdzybf3.com/20201126/yFSTjA7e/index.m3u8',
'https://vod2.bdzybf2.com/20201127/qdLsxG7Y/index.m3u8',
'https://vod3.bdzybf3.com/20201126/PTbTtMbi/index.m3u8',
'https://vod2.bdzybf2.com/20201126/sTyEiKBW/index.m3u8',
'https://vod2.bdzybf2.com/20201126/2PF25dey/index.m3u8',
'https://vod3.bdzybf3.com/20201126/7uaWOA7t/index.m3u8',
'https://vod3.bdzybf3.com/20201127/uQK7TZhx/index.m3u8',
'https://vod3.bdzybf3.com/20201127/PeZ9SzPu/index.m3u8',
'https://vod3.bdzybf3.com/20201126/UdMlBKI1/index.m3u8',
'https://vod2.bdzybf2.com/20201126/Ey2wq1uQ/index.m3u8',
'https://vod2.bdzybf2.com/20201126/hFTherKD/index.m3u8',
'https://vod2.bdzybf2.com/20201126/3LhAHPK7/index.m3u8',
'https://vod2.bdzybf2.com/20201126/K0I6xMsU/index.m3u8',
'https://vod3.bdzybf3.com/20201125/DRmDKTiC/index.m3u8',
'https://vod3.bdzybf3.com/20201119/Qk38x1XZ/index.m3u8',
'https://vod3.bdzybf3.com/20201119/DE6BBpmL/index.m3u8',
'https://vod2.bdzybf2.com/20201124/ca5yX9f4/index.m3u8',
'https://vod2.bdzybf2.com/20201124/6qEsP1mL/index.m3u8',
'https://vod2.bdzybf2.com/20201124/PAHBgLno/index.m3u8',
'https://vod2.bdzybf2.com/20201124/dBFGr6yd/index.m3u8',
'https://vod2.bdzybf2.com/20201124/bcjkmhQR/index.m3u8',
'https://vod3.bdzybf3.com/20201124/cO9kAuBL/index.m3u8',
'https://vod2.bdzybf2.com/20201122/cRcKJvzl/index.m3u8',
'https://vod2.bdzybf2.com/20201122/7YiaWxQd/index.m3u8',
'https://vod3.bdzybf3.com/20201123/XWiAucVE/index.m3u8',
'https://vod3.bdzybf3.com/20201123/z0sDCL8v/index.m3u8',
'https://vod2.bdzybf2.com/20201117/Z1tlt7X5/index.m3u8',
'https://vod2.bdzybf2.com/20201117/sVxgaH6s/index.m3u8',
'https://vod2.bdzybf2.com/20201122/LEnKntyP/index.m3u8',
'https://vod2.bdzybf2.com/20201122/4pwPR0Av/index.m3u8',
'https://vod2.bdzybf2.com/20201122/iOiNCQ8Q/index.m3u8',
'https://vod3.bdzybf3.com/20201119/zPRidmip/index.m3u8',
'https://vod3.bdzybf3.com/20201120/pDil6BN8/index.m3u8',
'https://vod3.bdzybf3.com/20201122/I7yPE2mG/index.m3u8',
'https://vod2.bdzybf2.com/20201118/PgJkd0AN/index.m3u8',
'https://vod3.bdzybf3.com/20201121/3N7U5lAo/index.m3u8',
'https://vod3.bdzybf3.com/20201121/IvQ4R95i/index.m3u8',
'https://vod3.bdzybf3.com/20201119/ZfoChkFe/index.m3u8',
'https://vod3.bdzybf3.com/20201119/0sxXqKcz/index.m3u8',
'https://vod2.bdzybf2.com/20201117/JxcZtQ1w/index.m3u8',
'https://vod3.bdzybf3.com/20201119/41mWvxNG/index.m3u8',
'https://vod2.bdzybf2.com/20201115/kaztFw62/index.m3u8',
);
var playv = Math.floor((Math.random()*play_arr.length));
parent.MacPlayer.PlayUrl = play_arr[playv];
