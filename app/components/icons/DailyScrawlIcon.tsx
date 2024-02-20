import Svg, { Path, G } from "react-native-svg";
import { StyleSheet } from "react-native";

export const DailyScrawlIcon = ({
	colorScheme,
}: {
	colorScheme: "light" | "dark";
}) => {
	return (
		<Svg
			width="100%"
			height="100%"
			viewBox="0 0 813.000000 813.000000"
			preserveAspectRatio="xMidYMid meet"
			style={colorScheme === "dark" ? svgDark.dark : svgDark.light}
		>
			<G
				transform="translate(0.000000,813.000000) scale(0.100000,-0.100000)"
				// fill="fill-background"
				stroke="none"
			>
				<Path
					d="M6054 6480 c-192 -42 -370 -168 -480 -340 -28 -44 -44 -60 -60 -60
-13 0 -26 5 -29 11 -4 5 -17 15 -28 20 -12 5 -44 23 -72 39 -46 28 -113 61
-190 95 -101 44 -150 62 -205 75 -19 5 -66 18 -105 30 -172 51 -489 87 -677
77 -157 -9 -299 -23 -355 -35 -27 -6 -84 -18 -128 -27 -84 -18 -128 -30 -235
-66 -95 -32 -138 -48 -158 -58 -9 -5 -37 -19 -62 -31 -484 -233 -827 -564
-1055 -1020 -71 -142 -84 -170 -108 -235 -32 -89 -39 -111 -47 -145 -5 -19
-14 -55 -20 -80 -45 -174 -64 -278 -80 -430 -20 -198 -11 -408 26 -625 37
-218 78 -356 161 -545 47 -106 142 -288 166 -319 6 -7 16 -21 22 -31 18 -34
88 -134 132 -192 41 -54 53 -90 34 -103 -6 -3 -16 -18 -24 -33 -96 -186 -236
-451 -281 -532 -20 -36 -55 -102 -79 -148 -23 -46 -52 -102 -64 -125 -40 -78
-21 -150 39 -149 25 0 117 23 158 40 14 5 52 17 85 27 33 9 76 23 95 30 81 29
107 37 135 45 17 5 75 25 130 44 55 20 116 40 135 45 33 9 54 16 140 46 19 7
62 21 95 30 33 10 76 23 95 30 19 7 51 18 70 24 124 44 119 44 290 -13 121
-40 204 -59 446 -100 123 -22 480 -22 613 -1 138 22 248 44 311 62 88 25 234
75 268 92 9 4 33 15 52 23 61 27 244 119 275 138 17 11 40 25 52 32 184 107
414 319 572 528 167 220 260 387 346 620 7 19 20 53 28 75 23 61 68 239 91
360 55 292 43 653 -31 915 -33 120 -82 227 -124 275 -28 32 -105 75 -134 75
-6 0 -36 24 -66 53 -62 60 -151 142 -294 272 -54 50 -126 115 -160 146 -33 31
-82 75 -109 98 -80 69 -79 68 -64 89 34 49 153 172 165 172 8 0 38 -22 66 -48
234 -220 455 -420 501 -453 34 -26 48 -29 111 -29 59 0 81 5 128 29 65 33 129
81 172 130 102 115 156 310 134 486 -31 246 -151 427 -347 525 -37 18 -76 38
-87 43 -11 6 -38 14 -60 18 -22 4 -58 12 -80 18 -57 15 -147 12 -241 -9z m221
-392 c67 -25 144 -92 174 -148 16 -32 21 -59 21 -124 0 -47 -3 -91 -6 -100
-10 -27 -37 -17 -90 32 -28 26 -91 83 -140 127 -168 152 -195 178 -191 189 5
14 96 44 139 45 20 1 62 -9 93 -21z m-1770 -66 c174 -20 370 -72 520 -138 91
-39 125 -57 131 -65 3 -5 13 -9 23 -9 10 0 26 -11 35 -25 16 -25 16 -26 -11
-36 -38 -14 -69 -44 -93 -91 -45 -86 -16 -173 93 -276 131 -125 251 -236 331
-307 44 -38 107 -95 140 -126 34 -31 76 -69 95 -86 31 -27 33 -31 21 -54 -16
-29 -126 -176 -139 -183 -8 -5 -32 14 -125 101 -71 67 -177 165 -271 250 -44
39 -107 97 -140 128 -61 58 -142 105 -182 105 -66 0 -147 -52 -283 -183 -213
-204 -625 -603 -895 -866 -94 -91 -242 -233 -329 -316 -262 -247 -283 -268
-306 -310 -12 -22 -30 -53 -41 -70 -10 -16 -22 -37 -26 -45 -8 -16 -88 -156
-103 -180 -5 -8 -16 -28 -24 -45 -9 -16 -36 -66 -61 -110 -25 -44 -55 -101
-68 -127 -12 -26 -27 -48 -33 -48 -42 -1 -171 208 -269 435 -24 55 -72 209
-89 285 -47 216 -48 223 -48 447 0 224 10 324 49 478 18 74 80 270 92 293 5 9
32 64 61 122 56 115 52 108 129 229 216 335 583 619 946 731 17 6 39 14 50 19
50 22 252 67 360 80 85 10 344 6 460 -7z m514 -1364 c36 -34 95 -89 131 -123
36 -34 104 -94 153 -134 54 -45 87 -80 87 -92 0 -11 -53 -90 -118 -177 -105
-140 -166 -225 -212 -297 -26 -42 -93 -137 -165 -236 -38 -53 -90 -127 -115
-163 -25 -36 -77 -110 -116 -163 -39 -54 -115 -163 -169 -243 -54 -80 -117
-170 -140 -200 -23 -30 -58 -80 -78 -111 -39 -59 -65 -76 -157 -103 -80 -23
-167 -52 -230 -76 -30 -12 -68 -25 -85 -30 -16 -5 -55 -18 -85 -30 -30 -12
-66 -25 -80 -30 -14 -5 -50 -18 -80 -30 -30 -12 -68 -25 -85 -30 -46 -13 -158
-53 -213 -76 -18 -8 -41 -14 -50 -14 -10 0 -26 -6 -37 -14 -11 -7 -31 -16 -45
-19 -24 -5 -39 -10 -160 -57 -82 -32 -160 -54 -167 -47 -3 4 12 37 35 74 22
37 50 86 62 108 24 43 124 210 152 253 10 15 21 34 25 42 4 8 26 47 48 85 23
39 44 77 48 85 4 8 11 22 17 30 5 8 78 130 161 270 83 140 159 262 168 271 9
9 41 37 71 64 49 43 187 174 554 525 67 64 164 156 216 205 52 49 160 153 239
230 79 77 148 145 155 150 6 6 48 45 94 88 46 42 88 77 94 77 6 0 41 -28 77
-62z m1111 -117 c5 -11 10 -30 10 -42 0 -12 7 -45 15 -73 48 -167 62 -479 29
-656 -76 -420 -232 -739 -509 -1042 -73 -80 -307 -278 -329 -278 -3 0 -24 -13
-48 -29 -109 -74 -333 -175 -493 -224 -145 -44 -386 -86 -419 -74 -14 6 -8 19
41 84 32 43 89 123 126 178 38 55 92 134 121 175 29 41 88 127 131 190 44 63
104 150 135 192 79 109 166 232 235 333 33 48 83 118 110 156 28 37 84 116
125 175 41 59 113 160 160 224 47 65 113 158 148 206 85 120 289 407 336 472
40 56 59 64 76 33z"
				/>
				<Path
					d="M3684 5635 c-22 -7 -65 -24 -95 -38 -30 -13 -61 -27 -69 -31 -29 -12
-126 -69 -195 -114 -91 -60 -308 -277 -366 -367 -68 -103 -89 -158 -89 -227 0
-100 52 -170 147 -198 34 -10 51 -10 87 0 54 15 90 48 135 126 49 83 137 201
191 254 41 42 137 118 185 147 39 24 161 83 172 83 23 0 105 54 133 88 75 91
33 237 -79 277 -51 18 -101 18 -157 0z"
				/>
				<Path
					d="M2082 6326 c-48 -17 -100 -72 -113 -120 -45 -168 83 -302 242 -254
48 14 104 66 125 116 65 156 -93 317 -254 258z"
				/>
			</G>
		</Svg>
	);
};

const svgDark = StyleSheet.create({
	light: {
		// @ts-ignore
		fill: "#151414",
	},
	dark: {
		// @ts-ignore
		fill: "#d0d0d0",
	},
});
