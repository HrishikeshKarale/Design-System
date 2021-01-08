<template>
    <div class= 'packStationLayout'>
		<div class= 'head'>
			<vue-img :src= 'd_packLogo'/>
			<div>
				<span>Logout</span>
				<span>Hrishikesh Karale <span class= 'fas fa-user'/></span>
			</div>
		</div>
		<div class= 'body'>
			<div class= "item a">Product(s)</div>
			<div class= "item b">Order details</div>
			<div class= "item c">box (shipping)</div>
			<div class= "item d">wt and dims (shipping)</div>
			<div class= "item e">Carrier</div>
			<div class= "item f">cost</div>
			<div class= "item g">carrier logo</div>
		</div>
    </div>
</template>

<script>
import vueImg from "vue2-component-library"

    export default {
		name: 'packStationLayout',

		components: { vueImg },

		data () {
			const d_packLogo= require('@/assets/SVG/packStationLogo.svg')
			return {
				d_packLogo,
			} //return
		}, //date
    }
</script>

<style lang= "less" scoped>

	@import (reference) '../../Less/customMixins.less';

	@phi: 					1.618;
	@height: 				80vh;
	@width: 				80vw;
	@border:				0.5px solid #4A4949;

    @grayBase:              #000;
    @grayLight:             lighten(@grayBase, 46.7%); // #777
    @grayLighter:           lighten(@grayBase, 93.5%); // #eee
	@frA: (1fr / @phi);
	@frB: (@frA / @phi);
	@frC: (@frB / @phi);
	@frD: (@frC / @phi);
	@frE: (@frD / @phi);
	@frGF: (@frE / @phi);

	.packStationLayout {
		display: flex;
		flex-direction: column;
		width: @width;
		margin: 16px 32px;

		& > .head {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: nowrap;
			margin: 16px 0;

			& > img {
				height: 64px;
				cursor: pointer;
			}

			& > div {
				margin: auto 0;

				& > span {
					margin-left: 16px;

					&:first-child {
						margin-left: 0px;
					}
				}
			}
		}

		& > .body {
			display: grid;
			margin: 16px 32px;
			height: @height;
			/* border: @border; */
			grid-template-columns: @frA @frE @frGF @frC;
			grid-template-rows: @frA @frE @frGF @frC;
			grid-template-areas:
			/* horizontal */
			"A B B B"
			"A E F C"
			"A E G C"
			"A D D C";

			& > .item {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				width: 100%;

				color: @grayLighter;
				font-size: 1.5em;
				font-weight: 700;
				text-shadow: 1px 1px 1px @grayLight;
				.boxSizing(border-box);

				&:nth-of-type(4n) { background-position: 0% 0; }
				&:nth-of-type(4n + 4) { background-position: 0% 100%; }
				&:nth-of-type(4n + 3) { background-position: 100% 100%; }
				&:nth-of-type(4n + 2) { background-position: 100% 0; }

				&.a {
					grid-area: A;
					background-color: #a0ddff;
				}
				&.b {
					grid-area: B;
					background-color: #c1cefe;
				}
				&.c {
					grid-area: C;
					background-color: #758ecd;
				}
				&.d {
					grid-area: D;
					background-color: #7189ff;
				}
				&.e {
					grid-area: E;
					font-size: 1.2em;
					background-color: #624cab;
				}
				&.f {
					grid-area: F;
					font-size: 1em;
					background-color: #5d2e8c;
				}
				&.g {
					grid-area: G;
					font-size: 0.7em;
					background-color: #7a7a7a;
				}
			}
		}
	}
</style>