## Copyright 2020 Jacques Cuenca. License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>.
## 
## This program is free software and is distributed under the terms of the GNU General Public License, version 3 or any later version. A copy of the license can be found here: https://www.gnu.org/licenses/gpl-3.0.en.html

pkg load signal
fs=8000;

w=randn(fs*1,1);
audiowrite("white.wav",w/max(abs(w)),fs);

[b,a]=butter(1,0.01);
w=filter(b,a,w);
audiowrite("pink.wav",w/max(abs(w)),fs);

