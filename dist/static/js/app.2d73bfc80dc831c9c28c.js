webpackJsonp([1],{"2g0o":function(t,e,a){t.exports=a.p+"static/img/dice.14f55fb.png"},EEbw:function(t,e){t.exports={version:"0.20.1"}},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("yviF"),i=a.n(s),o=(a("881v"),a("MMSg")),r=a.n(o),c=(a("doPI"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var l=a("VU/8")({name:"App",beforeCreate:function(){this.$store.dispatch("registerWeb3")}},c,!1,function(t){a("syO8")},null,null).exports,u=a("/ocq"),d=a("//Fk"),p=a.n(d),m={name:"Make",data:function(){return{picked:null,Makerlist:{},MakeCompleteModal:!1,MakeMissMyselfModal:!1,MakeMissParityModal:!1,TakeCompleteModal:!1,TakeMissTimingModal:!1,TakeMissMyselfModal:!1,TakeActive:!0,Terms0fUseModal:!0,d1:!1,d2:!1,sum:!1,chohan:!1,isFullPage:!0,mside:!1,game:"Which",winEvent:null}},mounted:function(){this.$store.dispatch("getContractInstance");var t=i.a.firestore();t.settings({timestampsInSnapshots:!0});var e=this;t.collection("Incomplete").onSnapshot(function(t){e.Makerlist={},t.forEach(function(t){e.Makerlist[t.id]=t.data().side})});var a=document.querySelector(".burger"),n=document.querySelector("#"+a.dataset.target);a.addEventListener("click",function(){a.classList.toggle("is-active"),n.classList.toggle("is-active")})},computed:{web3:function(){return this.$store.state.web3}},methods:{make:function(){var t=this,e=i.a.firestore();e.settings({timestampsInSnapshots:!0}),null!=this.picked?e.collection("Incomplete").doc(t.$store.state.web3.coinbase).get().then(function(a){if(a.exists)t.MakeMissMyselfModal=!0;else{var n=t.$loading.open({container:t.isFullPage?null:t.$refs.element.$el});p.a.resolve().then(function(){return new p.a(function(e,a){t.$store.state.contractInstance().make(t.picked,{gas:3e5,value:t.$store.state.web3.web3Instance().toWei(.02,"ether"),from:t.$store.state.web3.coinbase},function(t,a){t?console.log(t):e()})})}).then(function(){return new p.a(function(e,a){t.$store.state.contractInstance().Makecomplete().watch(function(a,s){a?console.log("could not get event Makecomplete()"):(n.close(),t.MakeCompleteModal=s.args._status,e())})})}).then(function(){return new p.a(function(a,n){e.collection("Incomplete").doc(t.$store.state.web3.coinbase).set({address:t.$store.state.web3.coinbase,side:t.picked}),a()})})}}):t.MakeMissParityModal=!0},take:function(t,e){this.TakeActive=!1,this.winEvent=null;var a=this;p.a.resolve().then(function(){return new p.a(function(n,s){if(a.TakeActive=!1,t===a.$store.state.web3.coinbase)a.TakeMissMyselfModal=!0;else{var o=i.a.firestore();o.settings({timestampsInSnapshots:!0}),o.collection("Incomplete").doc(t).get().then(function(s){s.exists?a.$store.state.contractInstance().take(t,{gas:3e5,value:a.$store.state.web3.web3Instance().toWei(.02,"ether"),from:a.$store.state.web3.coinbase},function(s,o){if(s)console.log(s),a.TakeActive=!0;else{var r=a.$loading.open({container:a.isFullPage?null:a.$refs.element.$el}),c=i.a.firestore();c.settings({timestampsInSnapshots:!0}),c.collection("Incomplete").doc(t).delete().then(function(){console.log("remove from betslist")}).catch(function(t){console.error("Error removing document: ",t)}),p.a.resolve().then(function(){return new p.a(function(t,e){a.$store.state.contractInstance().Won().watch(function(e,n){e?console.log("could not get event Won()"):(a.winEvent=n.args,a.d1=a.winEvent._d1.c[0],a.d2=a.winEvent._d2.c[0],a.sum=a.d1+a.d2,a.chohan=a.winEvent._chohan.c[0].toString(),t())})})}).then(function(){return new p.a(function(t,n){a.mside=e,a.chohan===e?a.game="BETTER LUCK NEXT TIME!":a.game="WINNER WINNER CHICKEN DINNER!",t()})}).then(function(){r.close(),a.TakeCompleteModal=!0,n()})}}):(a.TakeMissTimingModal=!0,a.TakeActive=!0)})}})}).then(function(){return new p.a(function(t,e){a.TakeActive=!0,t()})})}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dicegame"},[a("section",{staticClass:"hero is-info is-medium"},[a("div",{staticClass:"hero-head"},[a("nav",{staticClass:"navbar"},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"navbar-menu",attrs:{id:"navbarMenu"}},[a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"tabs is-right"},[a("ul",[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("li",[a("a",{on:{click:function(e){t.Terms0fUseModal=!0}}},[t._v("Terms of use")])]),t._v(" "),t._m(4)])])])])])])]),t._v(" "),t._m(5)]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"columns features is-multiline is-desktop is-variable is-1",staticStyle:{margin:"-30px 0 12px 0"}},[a("div",{staticClass:"column box",staticStyle:{margin:"0 15px 12px 15px"}},[a("p",{staticClass:"subtitle has-text-weight-bold"},[t._v("Make: 0.02ether/1bet")]),t._v(" "),a("p",{staticClass:"has-text-weight-semibold"},[t._v("Choose your parity")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",value:"2"},domProps:{checked:t._q(t.picked,"2")},on:{change:function(e){t.picked="2"}}}),t._v(" "),a("label",{staticClass:"has-text-weight-bold",attrs:{for:"2"}},[t._v("丁(EVEN)")]),t._v(" "),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",value:"1"},domProps:{checked:t._q(t.picked,"1")},on:{change:function(e){t.picked="1"}}}),t._v(" "),a("label",{staticClass:"has-text-weight-bold",attrs:{for:"1"}},[t._v("半(ODD)")]),t._v(" "),a("br"),t._v(" "),a("a",{staticClass:"button is-info is-outlined",on:{click:t.make}},[t._v("make")]),t._v(" "),a("div",[a("a",{staticClass:"is-link",on:{click:function(e){t.Terms0fUseModal=!0}}},[t._v("Terms of use")])])]),t._v(" "),a("div",{staticClass:"column box",staticStyle:{margin:"0 15px 12px 15px"}},[a("p",{staticClass:"subtitle has-text-weight-bold"},[t._v("Take:0.02ether/1bet")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("List of betting")]),t._v(" "),a("table",{staticClass:"table is-hoverable",staticStyle:{width:"100%","table-lauout":"fixed","word-break":"break-all","word-wrap":"break-all"}},[t._m(6),t._v(" "),t._m(7),t._v(" "),a("tbody",t._l(t.Makerlist,function(e,n,s){return a("tr",{key:s},[t.web3.coinbase==n?a("td",{staticStyle:{color:"red"}},[t._v("You")]):t._e(),t._v(" "),t.web3.coinbase!=n?a("td",[t._v(t._s(n))]):t._e(),t._v(" "),1==e?a("td",[t._v("半(ODD)")]):t._e(),t._v(" "),2==e?a("td",[t._v("丁(EVEN)")]):t._e(),t._v(" "),a("td",[t.web3.coinbase!=n&&t.TakeActive?a("a",{staticClass:"button is-info is-outlined",on:{click:function(a){t.take(n,e)}}},[t._v("take&roll")]):t._e()])])}))]),t._v(" "),a("div",[a("a",{staticClass:"is-link",on:{click:function(e){t.Terms0fUseModal=!0}}},[t._v("Terms of use")])])])]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("div",{staticClass:"box",staticStyle:{margin:"0 15px 12px 15px"}},[a("p",{staticClass:"subtitle has-text-weight-bold"},[t._v("Your Metamask Info")]),t._v(" "),a("div",{staticClass:"metamask-info"},[a("p",[t._v("Metamask: "+t._s(t.web3.isInjected))]),t._v(" "),a("p",[t._v("Network: "+t._s(t.web3.networkId))]),t._v(" "),a("p",[t._v("Account: "+t._s(t.web3.coinbase))]),t._v(" "),a("p",[t._v("Balance: "+t._s(t.web3.balance/1e18))])])]),t._v(" "),a("b-modal",{attrs:{active:t.Terms0fUseModal},on:{"update:active":function(e){t.Terms0fUseModal=e}}},[a("div",{staticClass:"modal-card is-mobile"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Welcome to EtherChohan")])]),t._v(" "),a("section",{staticClass:"modal-card-body"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-10 is-offset-1",staticStyle:{"text-align":"left","font-size":"10px"}},[a("p",[t._v('\n                   By clicking "I agree" or interacting with EtherChohan beyond this point, you agree that\n                   you are at least 21 years of age and you represent, warrent and agree to ensure that your\n                   use of our services will comply with all applicable laws, statutes and regulations.'),a("br"),t._v("\n                   EtherChohan is not responsible for any illegal or unauthorized use of our services by you,\n                   and holds no responsibility for your funds and game results."),a("br"),t._v("\n                   EtherChohan is not to be used by individuals who are below 21 years of age, individuals\n                   under the legal age of majority in their jurisdiction and individuals accessing the Services\n                   from jurisdictions from which it is illegal to do so."),a("br"),t._v("\n                   EtherChohan is not able to verify the legality in each jurisdiction and it is your responsibility to ensure that their use this service is lawful in your jurisdiction."),a("br"),t._v("\n                   If you do not agree, please exit here.\n                 ")])])])]),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.Terms0fUseModal=!1}}},[t._v("I agree")])])])]),t._v(" "),a("b-modal",{attrs:{active:t.MakeCompleteModal},on:{"update:active":function(e){t.MakeCompleteModal=e}}},[a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Your bet has been made!")])]),t._v(" "),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("If you win, your prize money will be automatically transferred to your address. ")])]),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.MakeCompleteModal=!1}}},[t._v("Close")])])])]),t._v(" "),a("b-modal",{attrs:{active:t.MakeMissMyselfModal},on:{"update:active":function(e){t.MakeMissMyselfModal=e}}},[a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Make Error")])]),t._v(" "),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("Have you already bet?")])]),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.MakeMissMyselfModal=!1}}},[t._v("Close")])])])]),t._v(" "),a("b-modal",{attrs:{active:t.MakeMissParityModal},on:{"update:active":function(e){t.MakeMissParityModal=e}}},[a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Make Error")])]),t._v(" "),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("Even(丁) and Odd(半) checks have not been done.")])]),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.MakeMissParityModal=!1}}},[t._v("Close")])])])]),t._v(" "),a("b-modal",{attrs:{active:t.TakeCompleteModal},on:{"update:active":function(e){t.TakeCompleteModal=e}}},[a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v(t._s(t.game))])]),t._v(" "),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("The result is as follows:")]),t._v(" "),a("p",[t._v("dice1: "+t._s(t.d1)+", dice2: "+t._s(t.d2)+", sum: "+t._s(t.sum))]),t._v(" "),1==t.mside?a("p",[t._v("Maker: 半(ODD) You:丁(EVEN)")]):t._e(),t._v(" "),2==t.mside?a("p",[t._v("Maker: 丁(EVEN) You:半(ODD)")]):t._e()]),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.TakeCompleteModal=!1}}},[t._v("Close")])])])]),t._v(" "),a("b-modal",{attrs:{active:t.TakeMissTimingModal},on:{"update:active":function(e){t.TakeMissTimingModal=e}}},[a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Take Error")])]),t._v(" "),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("It seems that this bet has already been taken by someone else.")])]),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.TakeMissTimingModal=!1}}},[t._v("Close")])])])]),t._v(" "),a("b-modal",{attrs:{active:t.TakeMissMyselfModal},on:{"update:active":function(e){t.TakeMissMyselfModal=e}}},[a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Take Error")])]),t._v(" "),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("Are you trying to take your own bet?")])]),t._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.TakeMissMyselfModal=!1,t.TakeActive=!0}}},[t._v("Close")])])])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item title"},[e("i",{staticClass:"fas fa-dice"}),this._v(" EtherChohan\n                      ")]),this._v(" "),e("span",{staticClass:"navbar-burger burger",attrs:{"data-target":"navbarMenu"}},[e("span"),this._v(" "),e("span"),this._v(" "),e("span")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"is-active"},[e("a",{attrs:{href:"#wtc"}},[this._v("What's the Chohan?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#usage"}},[this._v("Usage")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#roadmap"}},[this._v("Roadmap")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://twitter.com/EtherChohan",target:"”_blank”"}},[this._v("Twitter")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("h1",{staticClass:"title"},[this._v("\n                Welcome to EtherChohan!\n              ")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v('\n                This is the first Dapps which produce Japanese gambling "Chohan(丁半)" on SmartContract.\n              ')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Makername")]),this._v(" "),e("th",{staticStyle:{width:"35%"}},[this._v("Makerparity")]),this._v(" "),e("th",{staticStyle:{width:"15%"}},[this._v("button")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tfoot",[e("tr",[e("th",[this._v("Makername")]),this._v(" "),e("th",[this._v("Makerparity")]),this._v(" "),e("th",[this._v("button")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box",staticStyle:{margin:"0 15px 12px 15px"},attrs:{id:"wtc"}},[n("p",{staticClass:"subtitle has-text-weight-bold"},[t._v("What's the Chō-Han(丁半)?")]),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-6 is-offset-1",staticStyle:{"text-align":"left"}},[n("p",[n("b",[t._v("Chō-Han(丁半)")]),t._v(" is a traditional Japanese gambling game using dice."),n("br"),t._v("\n             The game uses two standard six-sided dice, which are shaken in a bamboo cup by a dealer."),n("br"),t._v("\n             The cup is then overturned onto the floor. "),n("br"),t._v('\n             Players then place their wagers on whether the sum total of numbers showing on the two dice will be "Chō" (even) or "Han" (odd).'),n("br"),t._v("\n             The dealer then removes the cup, displaying the dice. The winner collect their money."),n("br"),t._v("\n             The dealer normally takes a 5% commission. If the dices are repdigit, it will be changed to 10%.\n           ")])]),t._v(" "),n("div",{staticClass:"column is-4"},[n("img",{attrs:{src:a("2g0o")}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box",staticStyle:{margin:"0 15px 12px 15px"},attrs:{id:"usage"}},[a("p",{staticClass:"subtitle has-text-weight-bold"},[t._v("Usage")]),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-10 is-offset-1",staticStyle:{"text-align":"left"}},[a("p",[t._v("You can make or take the bet."),a("br"),t._v(" "),a("b",[t._v("Make")]),t._v(" : Select even or odd, push “make” button, just send Ethereum."),a("br"),t._v("\n             The bet you made will immediately appear in the list of betting."),a("br"),t._v("\n             Your bet is displayed in red. If your bet is taken, it will disappear from the list."),a("br"),t._v(" "),a("b",[t._v("Take")]),t._v(" : Push “take” button, just send Ethereum."),a("br"),t._v("\n             Since you can quickly check the eyes of the dice with your victory or defeat, we recommend “take” if you want to know the results immediately."),a("br"),t._v("\n             Aside from running the contract, contract takes a 5% commission."),a("br"),t._v("\n             If the dices are repdigit, it will be changed to 10% just like ordinary Chō-Han."),a("br"),t._v(" "),a("b",[t._v("Depending on the situation of the network, approval may take a lot of time.")]),a("br"),t._v("\n             If you raise the gas price, it will be approved relatively quickly.\n           ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box",staticStyle:{margin:"0 15px 12px 15px"},attrs:{id:"roadmap"}},[a("p",{staticClass:"subtitle has-text-weight-bold"},[t._v("Roadmap")]),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-10 is-offset-1",staticStyle:{"text-align":"left"}},[a("p",[t._v("This service launched in June, 2018."),a("br"),t._v("\n             We are planning to update from time to time as we listen to the voice of the users so that you can enjoy with ease of use."),a("br"),t._v("\n             Here, we will describe what kind of function what kind of priority will be added."),a("br"),t._v("\n             As we plan to promote development with Agile, we plan to set up a place to exchange opinions with users as soon as possible."),a("br"),t._v("\n             Please wait a moment now. We are sorry if our English was strange."),a("br"),t._v("\n             The functions to be added in the future are as follows:"),a("br"),t._v("\n             ・To make it easy to refer to the Maker's winning percentage so far"),a("br"),t._v("\n             ・To make it possible to refer to the proportion of the eyes of each dice that occurred in the past"),a("br"),t._v("\n             ・To create a complete responsive site"),a("br"),t._v("\n             ・To make it possible to make the bet automatically"),a("br"),t._v("\n             ・To make it possible to cancel the bet made once"),a("br"),t._v("\n             ・To make it possible to set the amount of betting by yourself"),a("br"),t._v("\n             ・To make it possible for three or more people"),a("br"),t._v("\n               etc…\n          ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box",staticStyle:{margin:"0 15px 12px 15px"},attrs:{id:"support"}},[a("p",{staticClass:"subtitle has-text-weight-bold"},[t._v("Support")]),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-10 is-offset-1",staticStyle:{"text-align":"left"}},[a("p",[t._v("\n            We will refund properly if your bet is not made due to something error or if you can not take it."),a("br"),t._v("\n            Since all transaction records are on "),a("a",{attrs:{href:"https://etherscan.io/address/0x6371d289f2e5bbc4e1af2ba7743cae3bd82fbdb6"}},[t._v("here")]),t._v(", We plan to check it against your application."),a("br"),t._v("\n            We plan to create a form later, but please contact us "),a("a",{attrs:{href:"https://twitter.com/EtherChohan"}},[t._v("twitter DM")]),t._v(" now.\n          ")])])])])}]};var b=a("VU/8")(m,v,!1,function(t){a("fXLa"),a("TBP2")},"data-v-16a6c000",null).exports;n.a.use(u.a);var y=new u.a({mode:"history",routes:[{path:"",name:"Top",component:b}]}),h=a("NYxO"),f={web3:{isInjected:!1,web3Instance:null,networkId:null,coinbase:null,balance:null,error:null},contractInstance:null},_=a("woOf"),w=a.n(_),g=a("8k0n"),k=a.n(g),C=new p.a(function(t,e){var a=window.web3;if(void 0!==a){var n=new k.a(a.currentProvider);t({injectedWeb3:n.isConnected(),web3:function(){return n}})}else e(new Error("Unable to connect to Metamask"))}).then(function(t){return new p.a(function(e,a){t.web3().version.getNetwork(function(n,s){n?a(new Error("Unable to retrieve network ID")):(t=w()({},t,{networkId:s}),e(t))})})}).then(function(t){return new p.a(function(e,a){t.web3().eth.getCoinbase(function(n,s){n?a(new Error("Unable to retrieve coinbase")):(t=w()({},t,{coinbase:s}),e(t))})})}).then(function(t){return new p.a(function(e,a){t.web3().eth.getBalance(t.coinbase,function(n,s){n?a(new Error("Unable to retrieve balance for address: "+t.coinbase)):(t=w()({},t,{balance:s}),e(t))})})}),M=function(t){var e=window.web3;e=new k.a(e.currentProvider),setInterval(function(){if(e&&I.state.web3.web3Instance)if(e.eth.coinbase!==I.state.web3.coinbase){var t=e.eth.coinbase;e.eth.getBalance(e.eth.coinbase,function(e,a){e?console.log(e):I.dispatch("pollWeb3",{coinbase:t,balance:parseInt(a,10)})})}else e.eth.getBalance(I.state.web3.coinbase,function(t,e){t?console.log(t):parseInt(e,10)!==I.state.web3.balance&&I.dispatch("pollWeb3",{coinbase:I.state.web3.coinbase,balance:e})})},500)},x=[{constant:!1,inputs:[{name:"_amount",type:"uint256"}],name:"withDraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"kill",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"makerad",type:"address"}],name:"take",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"checkContractBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"dice1",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"x",type:"uint256"}],name:"make",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"dice2",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"sum",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"Makers",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"chohan",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"x",type:"uint256"}],name:"dice",outputs:[{name:"rand",type:"uint256"}],payable:!1,stateMutability:"pure",type:"function"},{payable:!1,stateMutability:"nonpayable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"_status",type:"bool"}],name:"Makecomplete",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_status",type:"bool"},{indexed:!1,name:"_d1",type:"uint256"},{indexed:!1,name:"_d2",type:"uint256"},{indexed:!1,name:"_chohan",type:"uint256"}],name:"Won",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"}],T=new p.a(function(t,e){t(new k.a(window.web3.currentProvider).eth.contract(x).at("0x6371d289f2e5bbc4e1af2ba7743cae3bd82fbdb6"))});n.a.use(h.a);var I=new h.a.Store({strict:!0,state:f,mutations:{registerWeb3Instance:function(t,e){console.log("registerWeb3instance Mutation being executed",e);var a=e,n=t.web3;n.coinbase=a.coinbase,n.networkId=a.networkId,n.balance=parseInt(a.balance,10),n.isInjected=a.injectedWeb3,n.web3Instance=a.web3,t.web3=n,M()},pollWeb3Instance:function(t,e){console.log("pollWeb3Instance mutation being executed",e),t.web3.coinbase=e.coinbase,t.web3.balance=parseInt(e.balance,10)},registerContractInstance:function(t,e){t.contractInstance=function(){return e}}},actions:{registerWeb3:function(t){var e=t.commit;console.log("registerWeb3 Action being executed"),C.then(function(t){console.log("committing result to registerWeb3Instance mutation"),e("registerWeb3Instance",t)}).catch(function(t){console.log("error in action registerWeb3",t)})},pollWeb3:function(t,e){var a=t.commit;console.log("pollWeb3 action being executed"),a("pollWeb3Instance",e)},getContractInstance:function(t){var e=t.commit;T.then(function(t){e("registerContractInstance",t)}).catch(function(t){return console.log(t)})}}});n.a.config.productionTip=!1,n.a.use(r.a),i.a.initializeApp({apiKey:"AIzaSyBBEmSSJQy0kYi1uzYYu73fPxXpXDcQbXY",authDomain:"dicegame-3566e.firebaseapp.com",projectId:"dicegame-3566e"}),new n.a({el:"#app",router:y,store:I,components:{App:l},template:"<App/>"})},"R/pS":function(t,e){t.exports=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"name",outputs:[{name:"o_name",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"content",outputs:[{name:"",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"subRegistrar",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_registrar",type:"address"}],name:"setSubRegistrar",outputs:[],type:"function"},{constant:!1,inputs:[],name:"Registrar",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"},{name:"_primary",type:"bool"}],name:"setAddress",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_content",type:"bytes32"}],name:"setContent",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"disown",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_winner",type:"address"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_bidder",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"},{indexed:!0,name:"addr",type:"address"}],name:"PrimaryChanged",type:"event"}]},TBP2:function(t,e){},UIsv:function(t,e){t.exports=[{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_refund",type:"address"}],name:"disown",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"}],name:"setAddr",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"}]},doPI:function(t,e){},fXLa:function(t,e){},oPsS:function(t,e){t.exports=[{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"indirectId",type:"bytes32"},{name:"value",type:"uint256"}],name:"icapTransfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"to",type:"bytes32"}],name:"deposit",outputs:[],payable:!0,type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"AnonymousDeposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"indirectId",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"IcapTransfer",type:"event"}]},syO8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2d73bfc80dc831c9c28c.js.map