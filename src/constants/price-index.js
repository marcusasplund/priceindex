const priceIndex = { '1914': 100, '1915': 115, '1916': 130, '1917': 164, '1918': 241, '1919': 266, '1920': 271, '1921': 221, '1922': 184, '1923': 174, '1924': 174, '1925': 177, '1926': 171, '1927': 169, '1928': 171, '1929': 168, '1930': 162, '1931': 157, '1932': 155, '1933': 151, '1934': 152, '1935': 155, '1936': 157, '1937': 162, '1938': 165, '1939': 170, '1940': 193, '1941': 219, '1942': 234, '1943': 235, '1944': 234, '1945': 233, '1946': 234, '1947': 241, '1948': 255, '1949': 256, '1950': 260, '1951': 304, '1952': 326, '1953': 328, '1954': 330, '1955': 339, '1956': 356, '1957': 372, '1958': 388, '1959': 391, '1960': 407, '1961': 416, '1962': 436, '1963': 449, '1964': 463, '1965': 487, '1966': 519, '1967': 540, '1968': 551, '1969': 566, '1970': 605, '1971': 650, '1972': 689, '1973': 735, '1974': 808, '1975': 887, '1976': 979, '1977': 1090, '1978': 1200, '1979': 1286, '1980': 1461, '1981': 1638, '1982': 1778, '1983': 1937, '1984': 2092, '1985': 2246, '1986': 2341, '1987': 2440, '1988': 2582, '1989': 2748, '1990': 3036, '1991': 3319, '1992': 3395, '1993': 3553, '1994': 3631, '1995': 3723, '1996': 3740, '1997': 3760, '1998': 3754, '1999': 3772, '2000': 3809, '2001': 3902, '2002': 3986, '2003': 4063, '2004': 4078, '2005': 4097, '2006': 4152, '2007': 4244, '2008': 4390, '2009': 4378, '2010': 4434, '2011': 4550, '2012': 4590, '2013': 4588, '2014': 4580, '2015': 4578, '2016': 4623, '2017': 4706, '2018': 4790 }

const priceIndexQuarters = { '1917M05': 155, '1917M09': 170, '1917M12': 197, '1918M03': 209, '1918M06': 226, '1918M09': 251, '1918M12': 277, '1919M03': 272, '1919M06': 264, '1919M09': 264, '1919M12': 265, '1920M03': 263, '1920M06': 268, '1920M09': 281, '1920M12': 270, '1921M03': 239, '1921M06': 224, '1921M09': 219, '1921M12': 202, '1922M03': 190, '1922M06': 184, '1922M09': 184, '1922M12': 176, '1923M03': 174, '1923M06': 171, '1923M09': 175, '1923M12': 174, '1924M03': 173, '1924M06': 170, '1924M09': 174, '1924M12': 179, '1925M03': 179, '1925M06': 177, '1925M09': 176, '1925M12': 174, '1926M03': 171, '1926M06': 171, '1926M09': 170, '1926M12': 170, '1927M03': 168, '1927M06': 168, '1927M09': 171, '1927M12': 169, '1928M03': 170, '1928M06': 172, '1928M09': 171, '1928M12': 169, '1929M03': 169, '1929M06': 168, '1929M09': 168, '1929M12': 166, '1930M03': 164, '1930M06': 163, '1930M09': 162, '1930M12': 160, '1931M03': 159, '1931M06': 157, '1931M09': 156, '1931M12': 156, '1932M03': 155, '1932M06': 155, '1932M09': 155, '1932M12': 153, '1933M03': 150, '1933M06': 150, '1933M09': 152, '1933M12': 150, '1934M03': 151, '1934M06': 152, '1934M09': 153, '1934M12': 153, '1935M03': 153, '1935M06': 155, '1935M09': 156, '1935M12': 156, '1936M03': 157, '1936M06': 157, '1936M09': 156, '1936M12': 157, '1937M03': 160, '1937M06': 162, '1937M09': 163, '1937M12': 164, '1938M03': 164, '1938M06': 165, '1938M09': 165, '1938M12': 166, '1939M03': 167, '1939M06': 167, '1939M09': 169, '1939M12': 177, '1940M03': 184, '1940M06': 191, '1940M09': 195, '1940M12': 202, '1941M03': 216, '1941M06': 216, '1941M09': 218, '1941M12': 224, '1942M03': 230, '1942M06': 234, '1942M09': 235, '1942M12': 235, '1943M03': 236, '1943M06': 235, '1943M09': 234, '1943M12': 234, '1944M03': 234, '1944M06': 233, '1944M09': 235, '1944M12': 233, '1945M03': 234, '1945M06': 233, '1945M09': 234, '1945M12': 232, '1946M03': 232, '1946M06': 234, '1946M09': 234, '1946M12': 237, '1947M03': 238, '1947M06': 239, '1947M09': 243, '1947M12': 244, '1948M03': 252, '1948M06': 253, '1948M09': 257, '1948M12': 256, '1949M03': 256, '1949M06': 256, '1949M09': 257, '1949M12': 256, '1950M03': 257, '1950M06': 258, '1950M09': 259, '1950M12': 265, '1951M03': 290, '1951M06': 301, '1951M09': 309, '1951M12': 316, '1952M03': 320, '1952M06': 328, '1952M09': 328, '1952M12': 328, '1953M03': 329, '1953M06': 328, '1953M09': 328, '1953M12': 327, '1954M03': 330, '1954M06': 332, '1954M07': 330, '1954M08': 330, '1954M09': 330, '1954M10': 330, '1954M11': 330, '1954M12': 330, '1955M01': 330, '1955M02': 330, '1955M03': 333, '1955M04': 335, '1955M05': 335, '1955M06': 335, '1955M07': 340, '1955M08': 340, '1955M09': 343, '1955M10': 346, '1955M11': 351, '1955M12': 351, '1956M01': 351, '1956M02': 351, '1956M03': 353, '1956M04': 353, '1956M05': 356, '1956M06': 356, '1956M07': 356, '1956M08': 358, '1956M09': 356, '1956M10': 356, '1956M11': 361, '1956M12': 364, '1957M01': 369, '1957M02': 369, '1957M03': 366, '1957M04': 369, '1957M05': 369, '1957M06': 371, '1957M07': 374, '1957M08': 371, '1957M09': 374, '1957M10': 376, '1957M11': 376, '1957M12': 379, '1958M01': 381, '1958M02': 387, '1958M03': 387, '1958M04': 389, '1958M05': 389, '1958M06': 389, '1958M07': 389, '1958M08': 389, '1958M09': 389, '1958M10': 389, '1958M11': 389, '1958M12': 389, '1959M01': 389, '1959M02': 389, '1959M03': 389, '1959M04': 389, '1959M05': 389, '1959M06': 389, '1959M07': 389, '1959M08': 392, '1959M09': 394, '1959M10': 394, '1959M11': 394, '1959M12': 394, '1960M01': 407, '1960M02': 407, '1960M03': 407, '1960M04': 404, '1960M05': 407, '1960M06': 407, '1960M07': 407, '1960M08': 407, '1960M09': 407, '1960M10': 407, '1960M11': 410, '1960M12': 410, '1961M01': 412, '1961M02': 412, '1961M03': 415, '1961M04': 415, '1961M05': 415, '1961M06': 417, '1961M07': 415, '1961M08': 417, '1961M09': 417, '1961M10': 417, '1961M11': 420, '1961M12': 420, '1962M01': 428, '1962M02': 428, '1962M03': 430, '1962M04': 433, '1962M05': 438, '1962M06': 438, '1962M07': 440, '1962M08': 440, '1962M09': 438, '1962M10': 438, '1962M11': 440, '1962M12': 440, '1963M01': 443, '1963M02': 443, '1963M03': 445, '1963M04': 448, '1963M05': 448, '1963M06': 448, '1963M07': 448, '1963M08': 451, '1963M09': 451, '1963M10': 451, '1963M11': 453, '1963M12': 456, '1964M01': 456, '1964M02': 456, '1964M03': 458, '1964M04': 458, '1964M05': 461, '1964M06': 461, '1964M07': 463, '1964M08': 466, '1964M09': 468, '1964M10': 468, '1964M11': 471, '1964M12': 471, '1965M01': 474, '1965M02': 474, '1965M03': 476, '1965M04': 479, '1965M05': 479, '1965M06': 481, '1965M07': 494, '1965M08': 494, '1965M09': 494, '1965M10': 497, '1965M11': 497, '1965M12': 499, '1966M01': 507, '1966M02': 512, '1966M03': 515, '1966M04': 515, '1966M05': 517, '1966M06': 520, '1966M07': 517, '1966M08': 520, '1966M09': 522, '1966M10': 525, '1966M11': 525, '1966M12': 527, '1967M01': 530, '1967M02': 535, '1967M03': 538, '1967M04': 538, '1967M05': 540, '1967M06': 540, '1967M07': 543, '1967M08': 543, '1967M09': 545, '1967M10': 545, '1967M11': 543, '1967M12': 543, '1968M01': 545, '1968M02': 548, '1968M03': 550, '1968M04': 550, '1968M05': 548, '1968M06': 550, '1968M07': 553, '1968M08': 550, '1968M09': 553, '1968M10': 553, '1968M11': 550, '1968M12': 556, '1969M01': 558, '1969M02': 558, '1969M03': 561, '1969M04': 563, '1969M05': 563, '1969M06': 563, '1969M07': 566, '1969M08': 568, '1969M09': 568, '1969M10': 571, '1969M11': 573, '1969M12': 576, '1970M01': 584, '1970M02': 594, '1970M03': 596, '1970M04': 599, '1970M05': 602, '1970M06': 604, '1970M07': 607, '1970M08': 609, '1970M09': 612, '1970M10': 614, '1970M11': 620, '1970M12': 622, '1971M01': 643, '1971M02': 643, '1971M03': 645, '1971M04': 643, '1971M05': 640, '1971M06': 643, '1971M07': 645, '1971M08': 655, '1971M09': 655, '1971M10': 663, '1971M11': 660, '1971M12': 668, '1972M01': 673, '1972M02': 676, '1972M03': 678, '1972M04': 681, '1972M05': 684, '1972M06': 686, '1972M07': 691, '1972M08': 694, '1972M09': 696, '1972M10': 699, '1972M11': 699, '1972M12': 709, '1973M01': 712, '1973M02': 717, '1973M03': 719, '1973M04': 724, '1973M05': 727, '1973M06': 735, '1973M07': 737, '1973M08': 740, '1973M09': 742, '1973M10': 750, '1973M11': 758, '1973M12': 763, '1974M01': 771, '1974M02': 791, '1974M03': 799, '1974M04': 794, '1974M05': 791, '1974M06': 796, '1974M07': 799, '1974M08': 806, '1974M09': 814, '1974M10': 840, '1974M11': 847, '1974M12': 850, '1975M01': 847, '1975M02': 855, '1975M03': 860, '1975M04': 863, '1975M05': 876, '1975M06': 881, '1975M07': 893, '1975M08': 904, '1975M09': 904, '1975M10': 914, '1975M11': 924, '1975M12': 927, '1976M01': 940, '1976M02': 947, '1976M03': 955, '1976M04': 963, '1976M05': 973, '1976M06': 980, '1976M07': 980, '1976M08': 988, '1976M09': 988, '1976M10': 1004, '1976M11': 1011, '1976M12': 1016, '1977M01': 1024, '1977M02': 1037, '1977M03': 1047, '1977M04': 1060, '1977M05': 1073, '1977M06': 1096, '1977M07': 1106, '1977M08': 1108, '1977M09': 1121, '1977M10': 1126, '1977M11': 1137, '1977M12': 1144, '1978M01': 1167, '1978M02': 1180, '1978M03': 1183, '1978M04': 1190, '1978M05': 1196, '1978M06': 1198, '1978M07': 1203, '1978M08': 1201, '1978M09': 1211, '1978M10': 1216, '1978M11': 1221, '1978M12': 1229, '1979M01': 1236, '1979M02': 1247, '1979M03': 1252, '1979M04': 1260, '1979M05': 1267, '1979M06': 1272, '1979M07': 1283, '1979M08': 1300, '1979M09': 1306, '1979M10': 1318, '1979M11': 1336, '1979M12': 1349, '1980M01': 1393, '1980M02': 1413, '1980M03': 1421, '1980M04': 1431, '1980M05': 1436, '1980M06': 1439, '1980M07': 1452, '1980M08': 1459, '1980M09': 1500, '1980M10': 1523, '1980M11': 1531, '1980M12': 1539, '1981M01': 1566, '1981M02': 1597, '1981M03': 1604, '1981M04': 1614, '1981M05': 1625, '1981M06': 1630, '1981M07': 1645, '1981M08': 1658, '1981M09': 1670, '1981M10': 1680, '1981M11': 1686, '1981M12': 1679, '1982M01': 1715, '1982M02': 1739, '1982M03': 1743, '1982M04': 1755, '1982M05': 1763, '1982M06': 1769, '1982M07': 1781, '1982M08': 1785, '1982M09': 1796, '1982M10': 1820, '1982M11': 1835, '1982M12': 1839, '1983M01': 1886, '1983M02': 1882, '1983M03': 1889, '1983M04': 1904, '1983M05': 1915, '1983M06': 1926, '1983M07': 1942, '1983M08': 1950, '1983M09': 1965, '1983M10': 1981, '1983M11': 1993, '1983M12': 2009, '1984M01': 2037, '1984M02': 2029, '1984M03': 2059, '1984M04': 2072, '1984M05': 2086, '1984M06': 2080, '1984M07': 2086, '1984M08': 2102, '1984M09': 2116, '1984M10': 2126, '1984M11': 2139, '1984M12': 2174, '1985M01': 2186, '1985M02': 2206, '1985M03': 2222, '1985M04': 2231, '1985M05': 2257, '1985M06': 2248, '1985M07': 2247, '1985M08': 2247, '1985M09': 2257, '1985M10': 2272, '1985M11': 2286, '1985M12': 2295, '1986M01': 2322, '1986M02': 2323, '1986M03': 2319, '1986M04': 2333, '1986M05': 2333, '1986M06': 2333, '1986M07': 2339, '1986M08': 2336, '1986M09': 2357, '1986M10': 2365, '1986M11': 2365, '1986M12': 2371, '1987M01': 2402, '1987M02': 2402, '1987M03': 2406, '1987M04': 2412, '1987M05': 2414, '1987M06': 2409, '1987M07': 2438, '1987M08': 2452, '1987M09': 2475, '1987M10': 2485, '1987M11': 2494, '1987M12': 2494, '1988M01': 2507, '1988M02': 2526, '1988M03': 2538, '1988M04': 2560, '1988M05': 2568, '1988M06': 2576, '1988M07': 2587, '1988M08': 2593, '1988M09': 2612, '1988M10': 2633, '1988M11': 2637, '1988M12': 2643, '1989M01': 2674, '1989M02': 2688, '1989M03': 2698, '1989M04': 2725, '1989M05': 2736, '1989M06': 2745, '1989M07': 2745, '1989M08': 2757, '1989M09': 2779, '1989M10': 2802, '1989M11': 2808, '1989M12': 2817, '1990M01': 2907, '1990M02': 2921, '1990M03': 3001, '1990M04': 2998, '1990M05': 3016, '1990M06': 3013, '1990M07': 3042, '1990M08': 3062, '1990M09': 3097, '1990M10': 3118, '1990M11': 3128, '1990M12': 3125, '1991M01': 3198, '1991M02': 3287, '1991M03': 3299, '1991M04': 3318, '1991M05': 3321, '1991M06': 3316, '1991M07': 3318, '1991M08': 3312, '1991M09': 3349, '1991M10': 3362, '1991M11': 3376, '1991M12': 3372, '1992M01': 3363, '1992M02': 3365, '1992M03': 3379, '1992M04': 3388, '1992M05': 3390, '1992M06': 3382, '1992M07': 3378, '1992M08': 3379, '1992M09': 3428, '1992M10': 3435, '1992M11': 3419, '1992M12': 3432, '1993M01': 3521, '1993M02': 3530, '1993M03': 3546, '1993M04': 3560, '1993M05': 3552, '1993M06': 3540, '1993M07': 3534, '1993M08': 3540, '1993M09': 3572, '1993M10': 3582, '1993M11': 3584, '1993M12': 3569, '1994M01': 3581, '1994M02': 3593, '1994M03': 3606, '1994M04': 3620, '1994M05': 3628, '1994M06': 3629, '1994M07': 3629, '1994M08': 3631, '1994M09': 3663, '1994M10': 3667, '1994M11': 3664, '1994M12': 3658, '1995M01': 3671, '1995M02': 3686, '1995M03': 3701, '1995M04': 3726, '1995M05': 3730, '1995M06': 3727, '1995M07': 3723, '1995M08': 3718, '1995M09': 3743, '1995M10': 3753, '1995M11': 3752, '1995M12': 3740, '1996M01': 3734, '1996M02': 3737, '1996M03': 3755, '1996M04': 3764, '1996M05': 3759, '1996M06': 3745, '1996M07': 3736, '1996M08': 3718, '1996M09': 3740, '1996M10': 3739, '1996M11': 3730, '1996M12': 3724, '1997M01': 3720, '1997M02': 3714, '1997M03': 3728, '1997M04': 3755, '1997M05': 3755, '1997M06': 3761, '1997M07': 3759, '1997M08': 3761, '1997M09': 3796, '1997M10': 3793, '1997M11': 3787, '1997M12': 3785, '1998M01': 3753, '1998M02': 3749, '1998M03': 3755, '1998M04': 3765, '1998M05': 3771, '1998M06': 3764, '1998M07': 3755, '1998M08': 3736, '1998M09': 3752, '1998M10': 3759, '1998M11': 3750, '1998M12': 3743, '1999M01': 3743, '1999M02': 3745, '1999M03': 3759, '1999M04': 3768, '1999M05': 3774, '1999M06': 3780, '1999M07': 3764, '1999M08': 3764, '1999M09': 3790, '1999M10': 3794, '1999M11': 3784, '1999M12': 3793, '2000M01': 3762, '2000M02': 3780, '2000M03': 3797, '2000M04': 3799, '2000M05': 3818, '2000M06': 3816, '2000M07': 3799, '2000M08': 3802, '2000M09': 3828, '2000M10': 3837, '2000M11': 3838, '2000M12': 3835, '2001M01': 3823, '2001M02': 3837, '2001M03': 3866, '2001M04': 3899, '2001M05': 3926, '2001M06': 3920, '2001M07': 3899, '2001M08': 3910, '2001M09': 3943, '2001M10': 3932, '2001M11': 3933, '2001M12': 3937, '2002M01': 3927, '2002M02': 3936, '2002M03': 3971, '2002M04': 3987, '2002M05': 3997, '2002M06': 3991, '2002M07': 3978, '2002M08': 3980, '2002M09': 4010, '2002M10': 4024, '2002M11': 4013, '2002M12': 4019, '2003M01': 4032, '2003M02': 4067, '2003M03': 4088, '2003M04': 4073, '2003M05': 4069, '2003M06': 4057, '2003M07': 4044, '2003M08': 4043, '2003M09': 4072, '2003M10': 4075, '2003M11': 4066, '2003M12': 4070, '2004M01': 4062, '2004M02': 4051, '2004M03': 4082, '2004M04': 4082, '2004M05': 4092, '2004M06': 4075, '2004M07': 4069, '2004M08': 4065, '2004M09': 4094, '2004M10': 4105, '2004M11': 4082, '2004M12': 4082, '2005M01': 4060, '2005M02': 4079, '2005M03': 4088, '2005M04': 4094, '2005M05': 4095, '2005M06': 4097, '2005M07': 4082, '2005M08': 4089, '2005M09': 4119, '2005M10': 4126, '2005M11': 4116, '2005M12': 4117, '2006M01': 4085, '2006M02': 4104, '2006M03': 4133, '2006M04': 4154, '2006M05': 4160, '2006M06': 4159, '2006M07': 4152, '2006M08': 4155, '2006M09': 4179, '2006M10': 4179, '2006M11': 4185, '2006M12': 4185, '2007M01': 4164, '2007M02': 4185, '2007M03': 4213, '2007M04': 4234, '2007M05': 4229, '2007M06': 4236, '2007M07': 4229, '2007M08': 4228, '2007M09': 4271, '2007M10': 4293, '2007M11': 4321, '2007M12': 4329, '2008M01': 4297, '2008M02': 4315, '2008M03': 4356, '2008M04': 4375, '2008M05': 4392, '2008M06': 4413, '2008M07': 4404, '2008M08': 4412, '2008M09': 4457, '2008M10': 4464, '2008M11': 4428, '2008M12': 4368, '2009M01': 4352, '2009M02': 4353, '2009M03': 4365, '2009M04': 4372, '2009M05': 4375, '2009M06': 4385, '2009M07': 4365, '2009M08': 4375, '2009M09': 4388, '2009M10': 4399, '2009M11': 4398, '2009M12': 4408, '2010M01': 4380, '2010M02': 4406, '2010M03': 4417, '2010M04': 4417, '2010M05': 4426, '2010M06': 4426, '2010M07': 4413, '2010M08': 4413, '2010M09': 4450, '2010M10': 4464, '2010M11': 4479, '2010M12': 4511, '2011M01': 4473, '2011M02': 4500, '2011M03': 4531, '2011M04': 4550, '2011M05': 4559, '2011M06': 4548, '2011M07': 4546, '2011M08': 4547, '2011M09': 4579, '2011M10': 4579, '2011M11': 4590, '2011M12': 4599, '2012M01': 4556, '2012M02': 4586, '2012M03': 4599, '2012M04': 4609, '2012M05': 4606, '2012M06': 4594, '2012M07': 4576, '2012M08': 4581, '2012M09': 4599, '2012M10': 4596, '2012M11': 4585, '2012M12': 4596, '2013M01': 4558, '2013M02': 4579, '2013M03': 4597, '2013M04': 4588, '2013M05': 4595, '2013M06': 4587, '2013M07': 4581, '2013M08': 4585, '2013M09': 4603, '2013M10': 4593, '2013M11': 4590, '2013M12': 4603, '2014M01': 4549, '2014M02': 4569, '2014M03': 4568, '2014M04': 4586, '2014M05': 4588, '2014M06': 4598, '2014M07': 4583, '2014M08': 4578, '2014M09': 4585, '2014M10': 4588, '2014M11': 4581, '2014M12': 4588, '2015M01': 4540, '2015M02': 4572, '2015M03': 4576, '2015M04': 4575, '2015M05': 4591, '2015M06': 4578, '2015M07': 4579, '2015M08': 4570, '2015M09': 4588, '2015M10': 4592, '2015M11': 4584, '2015M12': 4591, '2016M01': 4575, '2016M02': 4590, '2016M03': 4612, '2016M04': 4612, '2016M05': 4620, '2016M06': 4625, '2016M07': 4627, '2016M08': 4622, '2016M09': 4630, '2016M10': 4646, '2016M11': 4647, '2016M12': 4671, '2017M01': 4639, '2017M02': 4671, '2017M03': 4671, '2017M04': 4698, '2017M05': 4701, '2017M06': 4704, '2017M07': 4729, '2017M08': 4722, '2017M09': 4728, '2017M10': 4725, '2017M11': 4734, '2017M12': 4752, '2018M01': 4712, '2018M02': 4746, '2018M03': 4759, '2018M04': 4779, '2018M05': 4790, '2018M06': 4801, '2018M07': 4826, '2018M08': 4816, '2018M09': 4838, '2018M10': 4832 }

export { priceIndex, priceIndexQuarters }
