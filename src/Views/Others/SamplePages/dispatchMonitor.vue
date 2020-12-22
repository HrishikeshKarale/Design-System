<template>
    <div class= 'dispatchMonitor'>
        <h3>
            <span 
                v-if= 'selected' 
                style= "font-size: 18px;"
                @click= 'select(null)'
            >
                <a>Dispatch</a>    
            </span>
            <span v-else>Dispatch</span>
            <template v-if= 'selected'>
                / {{selected}}
            </template>
        </h3>
        <div
            :class= '{selected: selected}'
            class= 'firstLevel'
        >
            <card-background
                low= '2'
                high= '4'
            >
                <div class= 'cards'>
                    <h5>DISPATCH</h5>
                    <div class= 'lateVsNotLate'>
                        <div  
                            v-show= '!selected'
                            class= 'notLate'
                        >
                            <span>
                                <div>Total: <span> 864</span> </div>
                                <div>Incomming: <span>260</span> </div>
                            </span>
                        </div>
                        <div class= 'late'>
                            <span :class= '["fas fa-thumbs-down", selected? "fa-1x":"fa-2x"]'/>
                            <span>324</span>
                        </div>
                    </div>
                </div>
            </card-background>
            <card-background
                low= '2'
                high= '4'
            >
                <div 
                    class= 'cards'
                    @click= "select('Picking')"
                >
                    <h5>PICKING</h5>
                    <div class= 'lateVsNotLate'>
                        <div   
                            v-show= '!selected'
                            class= 'notLate'
                        >
                            <span>
                                <div>Workload (avg): <span> 4Hr</span> </div>
                                <div>Incomming: <span>260</span> </div>
                            </span>
                        </div>
                        <div class= 'late'>
                            <span :class= '["fas fa-thumbs-down", selected? "fa-1x":"fa-2x"]'/>
                            <span>324</span>
                        </div>
                    </div>
                </div>
            </card-background>
            <card-background
                low= '2'
                high= '4'
            >
                <div class= 'cards'>
                    <h5>PACKING</h5>
                    <div class= 'lateVsNotLate'>
                        <div   
                            v-show= '!selected'
                            class= 'notLate'
                        >
                            <span>
                                <div>Total: <span> 864</span> </div>
                                <div>Rate: <span>36.09</span> </div>
                                <div>Goal: <span>45.08</span> </div>
                            </span>
                        </div>
                        <div class= 'late'>
                            <span :class= '["fas fa-thumbs-down", selected? "fa-1x":"fa-2x"]'/>
                            <span>324</span>
                        </div>
                    </div>
                </div>
            </card-background>
            <card-background
                low= '2'
                high= '4'
            >
                <div class= 'cards'>
                    <h5>METERING</h5>
                    <div class= 'lateVsNotLate'>
                        <div   
                            v-show= '!selected'
                            class= 'notLate'
                        >
                            <span>
                                <div>Total: <span> 864</span> </div>
                                <div>Rate: <span>36.09</span> </div>
                                <div>Goal: <span>45.08</span> </div>
                            </span>
                        </div>
                        <div class= 'late'>
                            <span :class= '["fas fa-thumbs-down", selected? "fa-1x":"fa-2x"]'/>
                            <span>324</span>
                        </div>
                    </div>
                </div>
            </card-background>
            <div :class= 'selected? "selected":"second"'>
                <vue-img src= "https://datavizcatalogue.com/methods/images/top_images/line_graph.png" alt= "graph" />
                               <div style= 'background-color: #ffffff; height: fit-content;'>
                    <card-background
                        :low= 'selected? "2": "1"'
                        :high= 'selected? "4": "1"'
                    >
                        <div 
                            class= 'cards'
                            v-if= 'selected'
                        >
                            <h5>ON HOLD</h5>
                            <div class= 'lateVsNotLate'>
                                <div   
                                    v-show= '!selected'
                                    class= 'notLate'
                                >
                                    <span>Cycle Count
                                        <div>Active: <span> 3</span> </div>
                                        <div>Assigned: <span>1</span> </div>
                                        <div>Counted: <span>1</span> </div>
                                    </span>
                                </div>
                                <div class= 'late'>
                                    <span :class= '["fas fa-thumbs-down", selected? "fa-1x":"fa-2x"]'/>
                                    <span>324 <span style= 'font-size: 9px; color: #888'>(orders)</span></span>
                                </div>
                            </div>
                        </div>
                        <div
                            v-else 
                            class= 'onHold'
                        >
                            <h5>ON HOLD</h5>
                            <div>
                                <div class= 'subCard'>
                                    <div>
                                        <span>Planned CC</span>
                                        <div>ABC1234 @ 4:45PM</div>
                                    </div>
                                    <div>
                                        3:00 ETA
                                    </div>
                                </div>
                                <div>
                                    <span :class= '["fas fa-thumbs-down", selected? "fa-1x":"fa-2x"]'/>
                                    <span>16 <span style= 'font-size: 9px; color: #888'>(orders)</span></span>
                                </div>
                            </div>
                            <div class= 'subCard'>
                                <div>
                                    <span>SKU/Tag</span>
                                    <div>ABC1234</div>
                                </div>
                                <div>
                                    <span>Affected</span>
                                    <div>5 <span style= 'font-size: 9px; color: #888'>(orders)</span></div>
                                </div>
                                <div>
                                    <div>
                                        <span class= 'fas fa-circle' style= 'color: #A94442; font-size: 18px;'/>
                                    </div>
                                </div>
                            </div>
                            <div class= 'subCard'>
                                <div>
                                    <span>SKU/Tag</span>
                                    <div>ABC1234</div>
                                </div>
                                <div>
                                    <span>Orders</span>
                                    <div>5</div>
                                </div>
                                <div>
                                    <span>Hrishikesh Karale</span>
                                </div>
                                <div>
                                    <div>
                                        <span class= 'fas fa-adjust' style= 'color: #3C763D; font-size: 18px;'/>
                                    </div>
                                </div>
                            </div>
                            <div class= 'subCard'>
                                <div>
                                    <span>SKU/Tag</span>
                                    <div>ABC1234</div>
                                </div>
                                <div>
                                    <div>5 <span style= 'font-size: 9px; color: #888'>(orders)</span></div>
                                </div>
                                <div>
                                    <span>Hrishikesh Karale</span>
                                </div>
                                <div>
                                    <div>
                                        <span class= 'fas fa-circle' style= 'color: #3C763D; font-size: 18px;'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </card-background>
                </div>
            </div>
        </div>
               <div class= 'secondLevel' v-if= 'selected'>
            <master-detail 
                :selected= 'd_selected'
            >
                <template slot= 'master'>                                      <div
                        v-for= '(emp, index) in d_empData.data'
                        :key= 'index'
                    >
                        <vue-card
                            logo= 'fas fa-user fa-3x'
                            :details= '{"cols": d_empData.cols, "values": emp}'
                            low= '1'
                            high= '4'
                        />
                        <card-background
                            low= '2'
                            high= '3'
                        >
                            <div class= 'empCard'>
                                <div class= 'title'>
                                    <h4>{{emp[0]}} <span>{{emp[1]}}</span> </h4>
                                    <span v-if= 'emp[6]> 0' >Late: {{emp[6]}}</span>
                                </div>
                                <div class= 'content'>
                                    <span class= 'fas fa-user fa-3x'></span>
                                    <div>
                                        <div>
                                            <div>Assignments:</div>
                                            <div>{{emp[2]}}</div>
                                        </div>
                                        <div>
                                            <div>Qty:</div>
                                            <div>{{emp[4]}} <span>{{emp[3]}} picks</span></div>
                                        </div>
                                    </div>
                                    <div>
                                        <span>{{emp[5]}}</span>
                                        <span>lines/hour</span>
                                    </div>
                                </div>
                            </div>
                        </card-background>
                    </div>
                </template>

                <template
                    v-if= 'd_selected' 
                    slot= 'detail'
                >
                    <vue-table 
                        :tableData= 'paginatedData'
                        :columns= 'd_cols'
                        :metadata= 'metadata'
                        :title= 'd_selected'
                        low= '1'
                    />
                </template>
            </master-detail>
        </div>
    </div>  
</template>

<script>
import vueImg from "@/components/UIComponents/Image/vueImg"
    import cardBackground from '@/components/UIComponents/Cards/cardBackground'
    import masterDetail from "@/components/UIComponents/MasterDetail/masterDetail"
    import vueCard from "@/components/UIComponents/Cards/vueCard"
    import {pickers} from '@/store/pickers'

    export default {
        name: 'dispatchMonitor',

        data () {
            var selected= null

            var d_selected= false

            var d_booleanTrue= false

            var d_empData = pickers

            return {
                selected: selected,

                d_selected: d_selected,

                d_booleanTrue: d_booleanTrue,

                d_empData: d_empData,
            }
        }, //data

        methods: {

            select: function (selected) {
                this.selected= selected
            }, //select
        }, //methods

        components: {
            vueImg,
            cardBackground,
            masterDetail,
            vueCard,
        }, //components
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) "../../../Less/customMixins.less";
    @import (reference) "../../../Less/customVariables.less";
    
    @errorText: #A94442;
    @successText: #3C763D;
    @linkColor: #00B6A8;
    @secondLevelBackground: #fafbfc;
    @textColor: #333;
    @cardHeight: 120px;
    @cardHeight1: 80px;
    @phi: 1.618;

    //mixin
    .sCard() {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: @secondLevelBackground;
        border-radius: @borderRadius;
        padding: @spaceMd @spaceLg;

        // .boxShadow(@one);

        & > span {
            font-size: @fontSizeSm;
        }

        & > div {
            font-weight: bold;

            span {
                font-size: 9px;
            }
        }
    };

    //mixin
    .cardTile(@height) {
        min-height: @height; 
        min-width: @height * @phi;
        border: hidden 2px solid ~"darken(#fafbfc, 10%)";
        border-radius: @borderRadius;
        display: flex; 
        flex-direction: column;
        justify-content: space-evenly;
        background-color: transparent;
        padding:8px 16px;

        > h5 {
            font-weight: bold;
            text-align: center;
            margin-top: 0px;
        }

        .subcard {
            .sCard();
        }

        > .lateVsNotLate {                 display: flex; 
            flex-direction: row; 
            flex-wrap: nowrap; 
            justify-content: space-around;  
            flex-grow: 2;        
            & > div {
                display: flex;
                flex-direction: column;
                // justify-content: space-between;
                               span {
                    text-align: center;
                    margin-top: 8px;
                    color: @textColor;

                    > div {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        justify-content: space-between;
                        font-size: @fontSizeMd;
                                               > span {
                            font-size: 16px;
                            color: @linkColor;
                        }
                    }

                    &:first-child {
                        // text-align: left;
                        margin-top: 0px;
                        // font-weight: bold;
                    }
                }

                &.late {
                    flex-grow: 1;                          // justify-content: space-between;
                                   .fas, .far {
                        color: @errorText;
                    }
                }

                &.notLate {
                    flex-grow: 1;                                         .fas, .far {
                        color: @successText;
                    }
                }
            }
        }
    };

    .dispatchMonitor {
        background-color: white;
        padding: 01px 16px;
        border-radius: 8px;
        max-width: 1760px;
        min-width: 1280px;
        height: 96vh;

        & > div {
            margin-left: 16px;

            &.secondLevel {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-top: 16px;
                padding: @spaceMd @spaceLg;
                background-color: @secondLevelBackground;

                .empCard {
                    display: flex;
                    flex-direction: column;
                    padding:8px 16px;

                    & > div.title,
                    & > div.content {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;

                        h4 {
                            margin-top: 0px;
                                                       > span {
                                font-size: @fontSizeSm;
                                color: ~"lighten(@textColor, 50%)";
                            }

                            + span {
                                font-size: @fontSizeSm;
                                color: @errorText;
                            }
                        }

                        //image
                        & > span {                                  flex-grow: 1;
                            color: ~"lighten(@textColor, 30%)";
                        }

                        //data and rates
                        & > div {
                            display: flex;
                            flex-direction: column;
                            margin-left: 16px;                                    flex-grow: 10;

                            //rows
                            & > div {
                                display: flex;                                          flex-grow: 1;

                                //key - Value
                                & > div {
                                    display: flex;
                                    flex-direction: row;                                         justify-content: space-between;                                            flex-grow: 3;
                                    font-size: 16px;

                                    &:last-child {
                                        font-weight: bold;
                                        font-size: 18px;
                                    }

                                    > span {
                                        font-size: @fontSizeSm;
                                        color: ~"lighten(@textColor, 30%)";
                                    }

                                    //key Queue size and quantity
                                    &:first-child {
                                        font-size: @fontSizeMd;
                                        color: ~"lighten(@textColor, 20%)";
                                    }
                                }
                            }

                            //Rate
                            &:last-child {
                                flex-grow: 1;
                                flex-direction: column;

                                > span {
                                    text-align: center;
                                    display: block;

                                    &:first-child {
                                        font-weight: bold;
                                        font-size: 24px;
                                    }

                                    &:last-child {
                                        color: ~"lighten(@textColor, 50%)";
                                        font-size: @fontSizeMd;
                                    }
                                }
                            }
                        }
                    }
                }

                .onHold {
                    display: flex;
                    flex-direction: column;
                    padding: @spaceMd @spaceLg;
                    border-radius: 8px;
                    border: hidden 2px solid ~"darken(#fafbfc, 10%)";
                    border-radius: @borderRadius;

                    & > div {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        margin-left: 4px;
                        margin-bottom: 8px;

                        &:last-child {
                            margin-bottom: 0px;
                        }

                        > div:not(.subCard) {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            margin-left: 16px;

                            .fas {
                                color: @errorText;
                            }
                        }
                    }

                    .subCard {
                        .sCard();
                    }
                }
            }

            &.firstLevel {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                transition: @transition;

                .selected {
                    display: flex;
                    background-color: transparent;
                    flex-direction: row-reverse;
                    max-height: (@cardHeight + 40px);

                    img {
                        max-width: @cardHeight * @phi; 
                    }

                    & > div {
                        margin-right: 16px;

                        .cards {
                            .cardTile(@cardHeight);
                        }
                    }
                }

                &.selected {
                    height: @cardHeight1;

                    .selected {
                        max-height: @cardHeight1;

                        img {
                            max-width: @cardHeight1 * @phi; 
                        }

                        .cards {
                            .cardTile(@cardHeight1);
                        }
                    }
                }

                .second {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin-top: 16px;
                    padding: @spaceMd @spaceLg;
                    background-color: @secondLevelBackground;
                    width: 100%;

                    .onHold {
                        display: flex;
                        flex-direction: column;
                        padding: @spaceMd @spaceLg;
                        border-radius: 8px;
                        border: hidden 2px solid ~"darken(#fafbfc, 10%)";
                        border-radius: @borderRadius;

                        & > div {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-around;
                            margin-left: 4px;
                            margin-bottom: 8px;

                            &:last-child {
                                margin-bottom: 0px;
                            }
                                                       > div:not(.subCard) {
                                display: flex;
                                flex-direction: column;
                                justify-content: space-around;
                                margin-left: 16px;
                                                               .fas {
                                    color: @errorText;
                                }
                            }
                        }

                        .subCard {
                            .sCard();
                        }
                    }
                }

                //
                > div {
                    margin-right: 16px;

                    &:last-child {
                        margin-right: 0px;
                    }

                    .cards {
                        .cardTile(@cardHeight);
                    }
                }
            }
        }
    }
</style>

