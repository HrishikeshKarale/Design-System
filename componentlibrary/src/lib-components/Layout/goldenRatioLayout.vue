<template>
    <div class= 'goldenRatioLayout'>
        <div class= "item a">A</div>
        <div class= "item b">B</div>
        <div class= "item c">C</div>
        <div class= "item d">D</div>
        <div class= "item e">E</div>
        <div class= "item f">F</div>
        <div class= "item g">G</div>
    </div>
</template>

<script>

    export default {
        name: 'goldenRatioLayout',
    }
</script>

<style lang= "less" scoped>

    @import (reference) "../../Less/customMixins.less";
    @import (reference) "../../Less/customVariables";

	@width: 64vw;
	@phi: 1.618;
	@height: @width;
	@border: 0.5px solid #4A4949;
	/* @widthA: (1 / @phi);
	@widthB: (@widthA / @phi);
	@widthC: (@widthB / @phi);
	@widthD: (@widthC / @phi);
	@widthE: (@widthD / @phi);
	@widthGF: (@widthE / @phi);
	@heightA: (100% / @phi);
	@heightB: (@heightA / @phi);
	@heightC: (@heightB / @phi);
	@heightD: (@heightC / @phi);
	@heightE: (@heightD / @phi);
	@heightGF: (@heightE / @phi); */
	@frA: (1fr / @phi);
	@frB: (@frA / @phi);
	@frC: (@frB / @phi);
	@frD: (@frC / @phi);
	@frE: (@frD / @phi);
	@frGF: (@frE / @phi);

	.goldenRatioLayout {
		width: @width;
		height: @height;
		border: @border;
		display: grid;
		grid-template-columns: @frA @frE @frGF @frC;
		grid-template-rows: @frA @frE @frGF @frC;
		grid-template-areas: 
		/* "A B B B"
		"A E F C"
		"A E G C"
		"A D D C";   */

		"A A A A"
		"B E E D"
		"B F G D"
		"B C C C";
	}

	.item {
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
		border: @border;
		background-image: radial-gradient(closest-side at 50% 50%, transparent calc(100% - 2px), currentColor 0%, transparent);
		background-size: 200% 200%;
		
		&:nth-of-type(4n) { background-position: 0% 0; }
		&:nth-of-type(4n + 2) { background-position: 0% 100%; }
		&:nth-of-type(4n + 3) { background-position: 100% 100%; }
		&:nth-of-type(4n + 4) { background-position: 100% 0; }
		
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
</style>