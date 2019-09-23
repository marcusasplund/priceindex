const priceIndex = {
  us: {
    1914: 10.0,
    1915: 10.1,
    1916: 10.9,
    1917: 12.8,
    1918: 15.1,
    1919: 17.3,
    1920: 20.0,
    1921: 17.9,
    1922: 16.8,
    1923: 17.1,
    1924: 17.1,
    1925: 17.5,
    1926: 17.7,
    1927: 17.4,
    1928: 17.1,
    1929: 17.1,
    1930: 16.7,
    1931: 15.2,
    1932: 13.7,
    1933: 13.0,
    1934: 13.4,
    1935: 13.7,
    1936: 13.9,
    1937: 14.4,
    1938: 14.1,
    1939: 13.9,
    1940: 14.0,
    1941: 14.7,
    1942: 16.3,
    1943: 17.3,
    1944: 17.6,
    1945: 18.0,
    1946: 19.5,
    1947: 22.3,
    1948: 24.1,
    1949: 23.8,
    1950: 24.1,
    1951: 26.0,
    1952: 26.5,
    1953: 26.7,
    1954: 26.9,
    1955: 26.8,
    1956: 27.2,
    1957: 28.1,
    1958: 28.9,
    1959: 29.1,
    1960: 29.6,
    1961: 29.9,
    1962: 30.2,
    1963: 30.6,
    1964: 31.0,
    1965: 31.5,
    1966: 32.4,
    1967: 33.4,
    1968: 34.8,
    1969: 36.7,
    1970: 38.8,
    1971: 40.5,
    1972: 41.8,
    1973: 44.4,
    1974: 49.3,
    1975: 53.8,
    1976: 56.9,
    1977: 60.6,
    1978: 65.2,
    1979: 72.6,
    1980: 82.4,
    1981: 90.9,
    1982: 96.5,
    1983: 99.6,
    1984: 103.9,
    1985: 107.6,
    1986: 109.6,
    1987: 113.6,
    1988: 118.3,
    1989: 124.0,
    1990: 130.7,
    1991: 136.2,
    1992: 140.3,
    1993: 144.5,
    1994: 148.2,
    1995: 152.4,
    1996: 156.9,
    1997: 160.5,
    1998: 163.0,
    1999: 166.6,
    2000: 172.2,
    2001: 177.1,
    2002: 179.9,
    2003: 184.0,
    2004: 188.9,
    2005: 195.3,
    2006: 201.6,
    2007: 207.342,
    2008: 215.303,
    2009: 214.537,
    2010: 218.056,
    2011: 224.939,
    2012: 229.594,
    2013: 232.957,
    2014: 236.736,
    2015: 237.017,
    2016: 240.007,
    2017: 245.120,
    2018: 0
  },
  sv: {
    2018: 4790,
    2017: 4706,
    2016: 4623,
    2015: 4578,
    2014: 4580,
    2013: 4588,
    2012: 4590,
    2011: 4550,
    2010: 4434,
    2009: 4378,
    2008: 4390,
    2007: 4244,
    2006: 4153,
    2005: 4097,
    2004: 4078,
    2003: 4063,
    2002: 3986,
    2001: 3902,
    2000: 3809,
    1999: 3772,
    1998: 3754,
    1997: 3760,
    1996: 3740,
    1995: 3723,
    1994: 3631,
    1993: 3553,
    1992: 3395,
    1991: 3319,
    1990: 3036,
    1989: 2748,
    1988: 2582,
    1987: 2440,
    1986: 2341,
    1985: 2246,
    1984: 2092,
    1983: 1937,
    1982: 1778,
    1981: 1638,
    1980: 1461,
    1979: 1286,
    1978: 1200,
    1977: 1090,
    1976: 979,
    1975: 887,
    1974: 808,
    1973: 735,
    1972: 689,
    1971: 650,
    1970: 605,
    1969: 566,
    1968: 551,
    1967: 540,
    1966: 519,
    1965: 487,
    1964: 463,
    1963: 449,
    1962: 436,
    1961: 416,
    1960: 407,
    1959: 391,
    1958: 388,
    1957: 372,
    1956: 356,
    1955: 339,
    1954: 330,
    1953: 328,
    1952: 326,
    1951: 304,
    1950: 260,
    1949: 256,
    1948: 255,
    1947: 241,
    1946: 234,
    1945: 233,
    1944: 234,
    1943: 235,
    1942: 234,
    1941: 219,
    1940: 193,
    1939: 170,
    1938: 165,
    1937: 162,
    1936: 157,
    1935: 155,
    1934: 152,
    1933: 151,
    1932: 155,
    1931: 157,
    1930: 162,
    1929: 168,
    1928: 171,
    1927: 169,
    1926: 171,
    1925: 177,
    1924: 174,
    1923: 174,
    1922: 184,
    1921: 221,
    1920: 271,
    1919: 266,
    1918: 241,
    1917: 164,
    1916: 130,
    1915: 115,
    1914: 100.1,
    1913: 98.8,
    1912: 98.5,
    1911: 96.5,
    1910: 93.7,
    1909: 93.7,
    1908: 94.6,
    1907: 93.2,
    1906: 88.6,
    1905: 86.8,
    1904: 85,
    1903: 86,
    1902: 84.6,
    1901: 83.9,
    1900: 86,
    1899: 85,
    1898: 81.4,
    1897: 77.7,
    1896: 75.3,
    1895: 75.9,
    1894: 74.5,
    1893: 78.5,
    1892: 81.8,
    1891: 83.3,
    1890: 80.8,
    1889: 79.1,
    1888: 75.7,
    1887: 73.1,
    1886: 75.8,
    1885: 79.7,
    1884: 83.6,
    1883: 86.8,
    1882: 87.3,
    1881: 89.7,
    1880: 87.5,
    1879: 83.2,
    1878: 88.7,
    1877: 94.9,
    1876: 95.4,
    1875: 95.1,
    1874: 95.7,
    1873: 92.4,
    1872: 85.6,
    1871: 82.3,
    1870: 80.2,
    1869: 83.7,
    1868: 88.8,
    1867: 85.9,
    1866: 80.8,
    1865: 78.3,
    1864: 78.4,
    1863: 81.9,
    1862: 86.2,
    1861: 83.9,
    1860: 80.6,
    1859: 77.1,
    1858: 81.9,
    1857: 91.5,
    1856: 91.3,
    1855: 82.8,
    1854: 77.2,
    1853: 72.2,
    1852: 70,
    1851: 67.8,
    1850: 66.5,
    1849: 66.7,
    1848: 67.5,
    1847: 69.4,
    1846: 68,
    1845: 65,
    1844: 62.3,
    1843: 66.8,
    1842: 70.1,
    1841: 69.2,
    1840: 68.2,
    1839: 69.6,
    1838: 70.7,
    1837: 67.1,
    1836: 65.3,
    1835: 65.9,
    1834: 64.9,
    1833: 64,
    1832: 65.2,
    1831: 65.4,
    1830: 62.8
  },
  uk: {
    1210: 0.5695267264,
    1211: 0.6391347881,
    1212: 0.5603649233,
    1213: 0.5414831251,
    1214: 0.5232375592,
    1215: 0.5564264776,
    1216: 0.5917205667,
    1217: 0.685087712,
    1218: 0.7989440653,
    1219: 0.7739308841,
    1220: 0.6758634229,
    1221: 0.7566775266,
    1222: 0.638916868,
    1223: 0.539483135,
    1224: 0.5951930424,
    1225: 0.8907466089,
    1226: 0.8055517242,
    1227: 0.805657358,
    1228: 0.7910517783,
    1229: 0.7767109798,
    1230: 0.7626301624,
    1231: 0.748804613,
    1232: 0.7352297038,
    1233: 0.6913483899,
    1234: 0.6971986336,
    1235: 0.7030983826,
    1236: 0.6830874816,
    1237: 0.7530005911,
    1238: 0.7316131939,
    1239: 0.7108332608,
    1240: 0.6906435379,
    1241: 0.6710272616,
    1242: 0.6519681444,
    1243: 0.6334503613,
    1244: 0.6154585368,
    1245: 0.5979777322,
    1246: 0.6885620076,
    1247: 0.9113914332,
    1248: 0.8998621036,
    1249: 0.6653605313,
    1250: 0.7282735493,
    1251: 0.6798860867,
    1252: 0.6990554904,
    1253: 0.803557938,
    1254: 0.6139168585,
    1255: 0.6309021545,
    1256: 0.8033351851,
    1257: 0.9311803397,
    1258: 0.9156454332,
    1259: 0.8742304675,
    1260: 0.7796099292,
    1261: 0.8264187046,
    1262: 0.8375504514,
    1263: 0.7530195653,
    1264: 0.7664163007,
    1265: 0.7944002262,
    1266: 0.7992901535,
    1267: 0.8580316637,
    1268: 0.7330502228,
    1269: 0.874369543,
    1270: 0.8561065512,
    1271: 1.079434663,
    1272: 1.134073612,
    1273: 0.9410737351,
    1274: 1.068943619,
    1275: 1.045469291,
    1276: 0.9324014129,
    1277: 1.0560727,
    1278: 0.913751069,
    1279: 0.8438788591,
    1280: 0.9552343438,
    1281: 0.8920160145,
    1282: 1.030606123,
    1283: 0.9925026937,
    1284: 0.9994823987,
    1285: 0.8391001213,
    1286: 0.9070376936,
    1287: 0.8162863552,
    1288: 0.6682116297,
    1289: 0.722430384,
    1290: 0.8406767544,
    1291: 0.9846264543,
    1292: 0.9206443955,
    1293: 0.9247245288,
    1294: 1.077554391,
    1295: 1.124800584,
    1296: 1.067474558,
    1297: 0.919711675,
    1298: 0.9938152786,
    1299: 0.9929564715,
    1300: 1.017758975,
    1301: 0.9595313691,
    1302: 0.9159377659,
    1303: 0.8661543242,
    1304: 0.8301555213,
    1305: 0.9267684801,
    1306: 0.9390808934,
    1307: 0.8970957706,
    1308: 0.9976230396,
    1309: 1.154735615,
    1310: 1.21723018,
    1311: 1.227959908,
    1312: 1.003479724,
    1313: 0.9787186912,
    1314: 1.062585337,
    1315: 1.13606467,
    1316: 1.608491475,
    1317: 1.63523671,
    1318: 1.216243008,
    1319: 0.9132687892,
    1320: 1.027369511,
    1321: 1.09978347,
    1322: 1.483092999,
    1323: 1.276866832,
    1324: 1.090711984,
    1325: 1.17513468,
    1326: 0.9968594803,
    1327: 0.8640923169,
    1328: 0.9448675955,
    1329: 1.045500321,
    1330: 1.05132633,
    1331: 1.131120289,
    1332: 1.152974241,
    1333: 0.9519908241,
    1334: 0.8975153313,
    1335: 0.8902284077,
    1336: 0.9310904023,
    1337: 0.8719099404,
    1338: 0.7875966389,
    1339: 0.7211609749,
    1340: 0.9394571221,
    1341: 0.8008434936,
    1342: 0.8383909988,
    1343: 0.8191009275,
    1344: 0.9158914822,
    1345: 0.809234672,
    1346: 0.8510877754,
    1347: 1.043209366,
    1348: 1.041020181,
    1349: 0.8283038156,
    1350: 0.9906055024,
    1351: 1.180002052,
    1352: 1.343401607,
    1353: 1.060919407,
    1354: 1.005107883,
    1355: 1.048406962,
    1356: 1.100669965,
    1357: 1.138133955,
    1358: 1.150320255,
    1359: 1.087601366,
    1360: 1.096812832,
    1361: 1.09007761,
    1362: 1.042583434,
    1363: 1.206754028,
    1364: 1.28969033,
    1365: 1.17420134,
    1366: 1.075636458,
    1367: 1.097813714,
    1368: 1.200712324,
    1369: 1.19907289,
    1370: 1.672849263,
    1371: 1.237078521,
    1372: 1.126323316,
    1373: 1.235438044,
    1374: 1.082842266,
    1375: 1.28052551,
    1376: 1.26044463,
    1377: 0.9854751203,
    1378: 0.9249087052,
    1379: 0.883165576,
    1380: 1.060791486,
    1381: 1.075835565,
    1382: 0.9908064039,
    1383: 0.9802461553,
    1384: 0.9881559781,
    1385: 0.9491542226,
    1386: 1.005526236,
    1387: 0.9375357037,
    1388: 0.8699916441,
    1389: 0.8116302147,
    1390: 1.035505521,
    1391: 1.214048253,
    1392: 0.9846587259,
    1393: 0.8526621334,
    1394: 0.8792715297,
    1395: 0.9064165688,
    1396: 0.9129241885,
    1397: 1.072421856,
    1398: 1.049171944,
    1399: 1.00007053,
    1400: 1.027093579,
    1401: 1.098475575,
    1402: 1.235674087,
    1403: 1.09061192,
    1404: 0.965277015,
    1405: 0.948461592,
    1406: 0.8854132165,
    1407: 0.9507211316,
    1408: 1.040828418,
    1409: 1.12629421,
    1410: 1.223983067,
    1411: 1.05474284,
    1412: 0.9758387389,
    1413: 0.9811157888,
    1414: 0.9521792192,
    1415: 0.9636443057,
    1416: 1.083161314,
    1417: 1.18001342,
    1418: 1.025819222,
    1419: 1.080752899,
    1420: 0.9570277829,
    1421: 1.03344105,
    1422: 0.9830812755,
    1423: 0.9102651817,
    1424: 0.9182255419,
    1425: 0.9903163578,
    1426: 0.9511458568,
    1427: 0.9096618982,
    1428: 0.9241737463,
    1429: 1.154574208,
    1430: 1.146751651,
    1431: 1.023293491,
    1432: 0.9073282357,
    1433: 1.100997442,
    1434: 0.9974953374,
    1435: 0.9503958501,
    1436: 1.01533716,
    1437: 0.9929671097,
    1438: 1.299481852,
    1439: 1.365586076,
    1440: 1.136889838,
    1441: 0.859679831,
    1442: 0.8927796958,
    1443: 0.9074261019,
    1444: 0.8960186501,
    1445: 0.8529038438,
    1446: 0.9819368709,
    1447: 1.016617285,
    1448: 0.9357358563,
    1449: 0.9719783851,
    1450: 0.9496601243,
    1451: 0.9860458364,
    1452: 1.002455328,
    1453: 0.976335207,
    1454: 0.9367575131,
    1455: 0.88481684,
    1456: 0.9362285187,
    1457: 0.9497281409,
    1458: 1.009743355,
    1459: 0.995658173,
    1460: 0.9842337539,
    1461: 1.106357049,
    1462: 1.112212345,
    1463: 0.885443058,
    1464: 0.8242291795,
    1465: 0.9115491403,
    1466: 0.9316060489,
    1467: 0.9792795718,
    1468: 1.023703594,
    1469: 1.00774615,
    1470: 1.034395919,
    1471: 1.038906608,
    1472: 1.00418891,
    1473: 0.9089433174,
    1474: 0.9064415982,
    1475: 0.9106858875,
    1476: 0.9611045717,
    1477: 0.9710670926,
    1478: 1.047839573,
    1479: 1.056082245,
    1480: 0.9804442192,
    1481: 0.9905166785,
    1482: 1.126212438,
    1483: 1.262022111,
    1484: 1.123915183,
    1485: 0.9876788858,
    1486: 0.9818191143,
    1487: 1.024367341,
    1488: 0.9976479994,
    1489: 1.017814878,
    1490: 1.004814244,
    1491: 1.065902961,
    1492: 1.034343345,
    1493: 0.9559162358,
    1494: 0.9550417446,
    1495: 0.9310560495,
    1496: 0.8537994159,
    1497: 1.034215172,
    1498: 0.9666329431,
    1499: 0.9871185973,
    1500: 0.9292432481,
    1501: 1.096794818,
    1502: 1.139471762,
    1503: 1.06146819,
    1504: 1.083117863,
    1505: 1.001071012,
    1506: 0.9697889199,
    1507: 1.007808962,
    1508: 1.002857438,
    1509: 0.8420065847,
    1510: 0.8744386693,
    1511: 0.8995349757,
    1512: 1.021887804,
    1513: 1.205778003,
    1514: 1.043995475,
    1515: 1.044673834,
    1516: 1.125400842,
    1517: 0.9804369848,
    1518: 1.094784982,
    1519: 1.097210915,
    1520: 1.243661712,
    1521: 1.327399833,
    1522: 1.187230171,
    1523: 1.181658078,
    1524: 1.138943718,
    1525: 1.036744157,
    1526: 1.01688551,
    1527: 1.147854318,
    1528: 1.610073555,
    1529: 1.298556699,
    1530: 1.299644742,
    1531: 1.32134861,
    1532: 1.343894001,
    1533: 1.321075057,
    1534: 1.16495121,
    1535: 1.317817311,
    1536: 1.369388946,
    1537: 1.386842949,
    1538: 1.21780794,
    1539: 1.165209626,
    1540: 1.222570388,
    1541: 1.330272226,
    1542: 1.287935796,
    1543: 1.392856892,
    1544: 1.488083576,
    1545: 1.690506699,
    1546: 1.825420559,
    1547: 1.351734666,
    1548: 1.331953193,
    1549: 1.66580498,
    1550: 2.116473027,
    1551: 2.33871287,
    1552: 2.074661931,
    1553: 1.874368092,
    1554: 1.845720224,
    1555: 2.205690411,
    1556: 2.683501573,
    1557: 2.870400431,
    1558: 1.975217376,
    1559: 2.121865638,
    1560: 2.211081338,
    1561: 2.42406472,
    1562: 2.418972576,
    1563: 2.512775367,
    1564: 2.608708874,
    1565: 2.222161552,
    1566: 2.298506524,
    1567: 2.133454047,
    1568: 2.145536112,
    1569: 2.328593056,
    1570: 2.283167655,
    1571: 2.196831173,
    1572: 2.420747356,
    1573: 2.544938153,
    1574: 2.968242029,
    1575: 2.581691448,
    1576: 2.628560685,
    1577: 2.8516244,
    1578: 2.64149269,
    1579: 2.645474033,
    1580: 2.478490595,
    1581: 2.851247326,
    1582: 2.83024965,
    1583: 2.692585481,
    1584: 2.685797484,
    1585: 2.859035755,
    1586: 3.391863443,
    1587: 3.388582069,
    1588: 2.825663116,
    1589: 2.944033096,
    1590: 3.319759411,
    1591: 3.279413791,
    1592: 2.941430608,
    1593: 3.085435986,
    1594: 3.557951855,
    1595: 3.975312016,
    1596: 4.212739633,
    1597: 4.838924441,
    1598: 4.384474884,
    1599: 3.576755855,
    1600: 3.706824926,
    1601: 3.733756347,
    1602: 3.607636695,
    1603: 3.422724826,
    1604: 3.486816988,
    1605: 3.723564747,
    1606: 3.756360708,
    1607: 3.836891237,
    1608: 4.452788502,
    1609: 4.527126174,
    1610: 4.001945576,
    1611: 4.1216769,
    1612: 4.333519072,
    1613: 4.576622362,
    1614: 4.510612553,
    1615: 4.378133355,
    1616: 4.448290377,
    1617: 4.53593307,
    1618: 4.529569563,
    1619: 4.184985744,
    1620: 3.926917298,
    1621: 4.163166433,
    1622: 4.742065685,
    1623: 4.615575676,
    1624: 4.44318422,
    1625: 4.612695062,
    1626: 4.611598591,
    1627: 4.232004123,
    1628: 4.18590072,
    1629: 4.364966475,
    1630: 5.106760719,
    1631: 5.510395726,
    1632: 5.048876785,
    1633: 4.956512772,
    1634: 5.02952905,
    1635: 5.055462915,
    1636: 5.184980099,
    1637: 5.245322793,
    1638: 5.451078544,
    1639: 4.927944373,
    1640: 4.624392316,
    1641: 5.040520735,
    1642: 4.778859042,
    1643: 4.885715445,
    1644: 4.793615736,
    1645: 4.880721712,
    1646: 5.116478133,
    1647: 6.005443818,
    1648: 6.588296889,
    1649: 6.442170891,
    1650: 6.224513406,
    1651: 6.017633994,
    1652: 5.414173412,
    1653: 4.991687143,
    1654: 4.350334596,
    1655: 4.210177913,
    1656: 4.868077515,
    1657: 5.131504676,
    1658: 5.583109482,
    1659: 5.971712498,
    1660: 5.623820032,
    1661: 6.036460688,
    1662: 6.174859518,
    1663: 5.510222998,
    1664: 5.486510808,
    1665: 5.164582322,
    1666: 4.818705815,
    1667: 4.708512222,
    1668: 4.734653628,
    1669: 5.18839511,
    1670: 5.078417424,
    1671: 5.10459405,
    1672: 4.897687425,
    1673: 5.188612375,
    1674: 5.919027904,
    1675: 5.600853381,
    1676: 4.816454016,
    1677: 5.101913791,
    1678: 5.39549341,
    1679: 5.494812825,
    1680: 5.101436999,
    1681: 5.297977424,
    1682: 5.218264193,
    1683: 5.160404284,
    1684: 5.224052214,
    1685: 5.470866143,
    1686: 4.805476374,
    1687: 4.72329453,
    1688: 4.522538796,
    1689: 4.447927123,
    1690: 4.657068688,
    1691: 4.540371462,
    1692: 5.262104189,
    1693: 5.87381755,
    1694: 5.805509329,
    1695: 5.450856243,
    1696: 5.989529734,
    1697: 6.163340604,
    1698: 6.559697318,
    1699: 6.063569686,
    1700: 5.504008127,
    1701: 4.972221414,
    1702: 4.854315791,
    1703: 4.679462231,
    1704: 5.080325634,
    1705: 4.796252699,
    1706: 4.732142248,
    1707: 4.708937834,
    1708: 5.052538522,
    1709: 6.326076348,
    1710: 6.634724817,
    1711: 5.945321949,
    1712: 5.477436506,
    1713: 5.507953394,
    1714: 5.789802692,
    1715: 5.177864928,
    1716: 5.503950015,
    1717: 5.393094833,
    1718: 5.170738684,
    1719: 5.016736598,
    1720: 5.472610772,
    1721: 5.25220643,
    1722: 5.109943534,
    1723: 5.154827358,
    1724: 5.150867857,
    1725: 5.488050928,
    1726: 5.708571193,
    1727: 5.546240666,
    1728: 6.270473673,
    1729: 5.902547333,
    1730: 5.262540237,
    1731: 4.865927601,
    1732: 4.574612865,
    1733: 4.749017495,
    1734: 5.012681237,
    1735: 5.220773375,
    1736: 5.241158666,
    1737: 5.032039956,
    1738: 4.85244041,
    1739: 5.059712877,
    1740: 5.792268613,
    1741: 5.994636792,
    1742: 5.145673491,
    1743: 4.701628204,
    1744: 4.544131648,
    1745: 4.767191013,
    1746: 5.142095033,
    1747: 5.006801952,
    1748: 5.154903551,
    1749: 5.125481846,
    1750: 5.1,
    1751: 5,
    1752: 5.2,
    1753: 5.1,
    1754: 5.3,
    1755: 5,
    1756: 5.2,
    1757: 6.3,
    1758: 6.3,
    1759: 5.8,
    1760: 5.6,
    1761: 5.3,
    1762: 5.5,
    1763: 5.7,
    1764: 6.2,
    1765: 6.4,
    1766: 6.5,
    1767: 6.8,
    1768: 6.7,
    1769: 6.2,
    1770: 6.2,
    1771: 6.7,
    1772: 7.4,
    1773: 7.4,
    1774: 7.5,
    1775: 7,
    1776: 6.9,
    1777: 6.9,
    1778: 7.1,
    1779: 6.5,
    1780: 6.3,
    1781: 6.6,
    1782: 6.7,
    1783: 7.5,
    1784: 7.6,
    1785: 7.2,
    1786: 7.2,
    1787: 7.2,
    1788: 7.5,
    1789: 7.4,
    1790: 7.5,
    1791: 7.5,
    1792: 7.6,
    1793: 7.8,
    1794: 8.5,
    1795: 9.4,
    1796: 10,
    1797: 9,
    1798: 8.8,
    1799: 9.9,
    1800: 13.5,
    1801: 15.1,
    1802: 11.6,
    1803: 11,
    1804: 11.3,
    1805: 13.1,
    1806: 12.6,
    1807: 12.3,
    1808: 12.8,
    1809: 14,
    1810: 14.4,
    1811: 14,
    1812: 15.9,
    1813: 16.3,
    1814: 14.2,
    1815: 12.7,
    1816: 11.6,
    1817: 13.2,
    1818: 13.2,
    1819: 12.9,
    1820: 11.7,
    1821: 10.3,
    1822: 8.9,
    1823: 9.5,
    1824: 10.3,
    1825: 12.1,
    1826: 11.4,
    1827: 10.7,
    1828: 10.4,
    1829: 10.3,
    1830: 9.9,
    1831: 10.9,
    1832: 10.1,
    1833: 9.5,
    1834: 8.7,
    1835: 8.9,
    1836: 9.9,
    1837: 10.1,
    1838: 10.2,
    1839: 10.9,
    1840: 11.1,
    1841: 10.9,
    1842: 10,
    1843: 8.9,
    1844: 8.9,
    1845: 9.3,
    1846: 9.7,
    1847: 10.9,
    1848: 9.5,
    1849: 8.9,
    1850: 8.4,
    1851: 8.1,
    1852: 8.1,
    1853: 8.9,
    1854: 10.2,
    1855: 10.5,
    1856: 10.5,
    1857: 10,
    1858: 9.1,
    1859: 9,
    1860: 9.3,
    1861: 9.5,
    1862: 9.3,
    1863: 9,
    1864: 8.9,
    1865: 9,
    1866: 9.5,
    1867: 10.1,
    1868: 10,
    1869: 9.5,
    1870: 9.5,
    1871: 9.6,
    1872: 10,
    1873: 10.4,
    1874: 10,
    1875: 9.8,
    1876: 9.8,
    1877: 9.7,
    1878: 9.5,
    1879: 9.1,
    1880: 9.4,
    1881: 9.3,
    1882: 9.4,
    1883: 9.3,
    1884: 9.1,
    1885: 8.8,
    1886: 8.7,
    1887: 8.6,
    1888: 8.7,
    1889: 8.8,
    1890: 8.8,
    1891: 8.9,
    1892: 8.9,
    1893: 8.8,
    1894: 8.7,
    1895: 8.6,
    1896: 8.5,
    1897: 8.7,
    1898: 8.7,
    1899: 8.8,
    1900: 9.2,
    1901: 9.2,
    1902: 9.2,
    1903: 9.3,
    1904: 9.3,
    1905: 9.3,
    1906: 9.3,
    1907: 9.4,
    1908: 9.4,
    1909: 9.5,
    1910: 9.6,
    1911: 9.6,
    1912: 9.9,
    1913: 9.8,
    1914: 9.8,
    1915: 11,
    1916: 13,
    1917: 16.3,
    1918: 19.9,
    1919: 21.9,
    1920: 25.3,
    1921: 23.1,
    1922: 19.9,
    1923: 18.7,
    1924: 18.6,
    1925: 18.6,
    1926: 18.5,
    1927: 18,
    1928: 18,
    1929: 17.8,
    1930: 17.3,
    1931: 16.6,
    1932: 16.2,
    1933: 15.8,
    1934: 15.8,
    1935: 15.9,
    1936: 16,
    1937: 16.6,
    1938: 16.8,
    1939: 17.3,
    1940: 20.2,
    1941: 22.4,
    1942: 24,
    1943: 24.8,
    1944: 25.5,
    1945: 26.2,
    1946: 27,
    1947: 28.9,
    1948: 31.1,
    1949: 32,
    1950: 33,
    1951: 36,
    1952: 39.3,
    1953: 40.5,
    1954: 41.3,
    1955: 43.1,
    1956: 45.3,
    1957: 46.9,
    1958: 48.4,
    1959: 48.6,
    1960: 49.1,
    1961: 50.8,
    1962: 53,
    1963: 54,
    1964: 55.8,
    1965: 58.4,
    1966: 60.7,
    1967: 62.3,
    1968: 65.2,
    1969: 68.7,
    1970: 73.1,
    1971: 80,
    1972: 85.7,
    1973: 93.5,
    1974: 108.5,
    1975: 134.8,
    1976: 157.1,
    1977: 182,
    1978: 197.1,
    1979: 223.5,
    1980: 263.7,
    1981: 295,
    1982: 320.4,
    1983: 335.1,
    1984: 351.8,
    1985: 373.2,
    1986: 385.9,
    1987: 402,
    1988: 421.7,
    1989: 454.5,
    1990: 497.5,
    1991: 526.7,
    1992: 546.4,
    1993: 555.1,
    1994: 568.5,
    1995: 588.2,
    1996: 602.4,
    1997: 621.3,
    1998: 642.6,
    1999: 652.5,
    2000: 671.8,
    2001: 683.7,
    2002: 695.1,
    2003: 715.2,
    2004: 736.5,
    2005: 757.3,
    2006: 781.5,
    2007: 815,
    2008: 847.5,
    2009: 843,
    2010: 881.9,
    2011: 927.8,
    2012: 957.6,
    2013: 986.7,
    2014: 1010,
    2015: 1020,
    2016: 1037.7,
    2017: 1075
  }
}
export { priceIndex }
