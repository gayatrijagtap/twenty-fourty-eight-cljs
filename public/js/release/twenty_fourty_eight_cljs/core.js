// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('twenty_fourty_eight_cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('twenty_fourty_eight_cljs.logic');
twenty_fourty_eight_cljs.core.home_page = (function twenty_fourty_eight_cljs$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Welcome to Reagent hello"], null)], null);
});
twenty_fourty_eight_cljs.core.get_background_color = (function twenty_fourty_eight_cljs$core$get_background_color(n){
var G__23140 = n;
switch (G__23140) {
case (0):
return "#f6eedf";

break;
case (2):
return "#ffd3b6";

break;
case (4):
return "#ffc8bd";

break;
case (8):
return "#f2b179";

break;
case (16):
return "#f59563";

break;
case (32):
return "#f67c5f";

break;
case (64):
return "#f65e3b";

break;
case (128):
return "#edcf72";

break;
case (256):
return "#edcc61";

break;
case (512):
return "#fcc169";

break;
case (1024):
return "#efb1ff";

break;
case (2048):
return "#7f78d2";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23140)].join('')));

}
});
twenty_fourty_eight_cljs.core.get_text_color = (function twenty_fourty_eight_cljs$core$get_text_color(n){
var G__23142 = n;
switch (G__23142) {
case (0):
return "#776e65";

break;
case (2):
return "#776e65";

break;
case (4):
return "#776e65";

break;
case (8):
return "#f9f6f2";

break;
case (16):
return "#f9f6f2";

break;
case (32):
return "#f9f6f2";

break;
case (64):
return "#f9f6f2";

break;
case (128):
return "#f9f6f2";

break;
case (256):
return "#f9f6f2";

break;
case (512):
return "#f9f6f2";

break;
case (1024):
return "#f9f6f2";

break;
case (2048):
return "#f9f6f2";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23142)].join('')));

}
});
twenty_fourty_eight_cljs.core.initial_game = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$board,twenty_fourty_eight_cljs.logic.initial_grid,cljs.core.cst$kw$is_DASH_over,false], null);
twenty_fourty_eight_cljs.core.game = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(twenty_fourty_eight_cljs.core.initial_game);
twenty_fourty_eight_cljs.core.cell = (function twenty_fourty_eight_cljs$core$cell(c){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cell"], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background_DASH_color,twenty_fourty_eight_cljs.core.get_background_color(c),cljs.core.cst$kw$color,twenty_fourty_eight_cljs.core.get_text_color(c)], null)], null),(((c === (0)))?" ":c)], null);
});
twenty_fourty_eight_cljs.core.row = (function twenty_fourty_eight_cljs$core$row(r){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(twenty_fourty_eight_cljs.core.cell,r)], null);
});
twenty_fourty_eight_cljs.core.update_state = (function twenty_fourty_eight_cljs$core$update_state(updated_grid){
if((updated_grid === (0))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$board,updated_grid,cljs.core.cst$kw$is_DASH_over,true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$board,updated_grid,cljs.core.cst$kw$is_DASH_over,false], null);
}
});
twenty_fourty_eight_cljs.core.move_grid_up = (function twenty_fourty_eight_cljs$core$move_grid_up(game){
var updated_grid = (function (){var G__23145 = cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(game);
var fexpr__23144 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(twenty_fourty_eight_cljs.logic.add_random_twos,twenty_fourty_eight_cljs.logic.move_up);
return (fexpr__23144.cljs$core$IFn$_invoke$arity$1 ? fexpr__23144.cljs$core$IFn$_invoke$arity$1(G__23145) : fexpr__23144.call(null,G__23145));
})();
return twenty_fourty_eight_cljs.core.update_state(updated_grid);
});
twenty_fourty_eight_cljs.core.move_grid_down = (function twenty_fourty_eight_cljs$core$move_grid_down(game){
var updated_grid = (function (){var G__23147 = cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(game);
var fexpr__23146 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(twenty_fourty_eight_cljs.logic.add_random_twos,twenty_fourty_eight_cljs.logic.move_down);
return (fexpr__23146.cljs$core$IFn$_invoke$arity$1 ? fexpr__23146.cljs$core$IFn$_invoke$arity$1(G__23147) : fexpr__23146.call(null,G__23147));
})();
return twenty_fourty_eight_cljs.core.update_state(updated_grid);
});
twenty_fourty_eight_cljs.core.move_grid_left = (function twenty_fourty_eight_cljs$core$move_grid_left(game){
var updated_grid = (function (){var G__23149 = cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(game);
var fexpr__23148 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(twenty_fourty_eight_cljs.logic.add_random_twos,twenty_fourty_eight_cljs.logic.move_left);
return (fexpr__23148.cljs$core$IFn$_invoke$arity$1 ? fexpr__23148.cljs$core$IFn$_invoke$arity$1(G__23149) : fexpr__23148.call(null,G__23149));
})();
return twenty_fourty_eight_cljs.core.update_state(updated_grid);
});
twenty_fourty_eight_cljs.core.move_grid_right = (function twenty_fourty_eight_cljs$core$move_grid_right(game){
var updated_grid = (function (){var G__23151 = cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(game);
var fexpr__23150 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(twenty_fourty_eight_cljs.logic.add_random_twos,twenty_fourty_eight_cljs.logic.move_right);
return (fexpr__23150.cljs$core$IFn$_invoke$arity$1 ? fexpr__23150.cljs$core$IFn$_invoke$arity$1(G__23151) : fexpr__23150.call(null,G__23151));
})();
return twenty_fourty_eight_cljs.core.update_state(updated_grid);
});
twenty_fourty_eight_cljs.core.reset_game = (function twenty_fourty_eight_cljs$core$reset_game(){
return cljs.core.reset_BANG_(twenty_fourty_eight_cljs.core.game,twenty_fourty_eight_cljs.core.initial_game);
});
twenty_fourty_eight_cljs.core.show_game_over = (function twenty_fourty_eight_cljs$core$show_game_over(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"game-over"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Game Over"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"play-again",cljs.core.cst$kw$on_DASH_click,twenty_fourty_eight_cljs.core.reset_game], null),"Play Again"], null)], null);
});
twenty_fourty_eight_cljs.core.board = (function twenty_fourty_eight_cljs$core$board(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["board"], null),cljs.core.cst$kw$autofocus,(1),cljs.core.cst$kw$tabindex,(1),cljs.core.cst$kw$on_DASH_key_DASH_down,(function (key_char){
var G__23152 = key_char.which;
switch (G__23152) {
case (37):
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(twenty_fourty_eight_cljs.core.game,twenty_fourty_eight_cljs.core.move_grid_left);

break;
case (38):
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(twenty_fourty_eight_cljs.core.game,twenty_fourty_eight_cljs.core.move_grid_up);

break;
case (39):
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(twenty_fourty_eight_cljs.core.game,twenty_fourty_eight_cljs.core.move_grid_right);

break;
case (40):
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(twenty_fourty_eight_cljs.core.game,twenty_fourty_eight_cljs.core.move_grid_down);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23152)].join('')));

}
})], null),(cljs.core.truth_(cljs.core.cst$kw$is_DASH_over.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(twenty_fourty_eight_cljs.core.game)))?twenty_fourty_eight_cljs.core.show_game_over():cljs.core.map.cljs$core$IFn$_invoke$arity$2(twenty_fourty_eight_cljs.core.row,cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(twenty_fourty_eight_cljs.core.game))))], null);
});
twenty_fourty_eight_cljs.core.mount_root = (function twenty_fourty_eight_cljs$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [twenty_fourty_eight_cljs.core.board], null),document.getElementById("app"));
});
twenty_fourty_eight_cljs.core.init_BANG_ = (function twenty_fourty_eight_cljs$core$init_BANG_(){
return twenty_fourty_eight_cljs.core.mount_root();
});
