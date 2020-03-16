// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('twenty_fourty_eight_cljs.logic');
goog.require('cljs.core');
goog.require('cljs.core.constants');
twenty_fourty_eight_cljs.logic.not_zero_QMARK_ = (function twenty_fourty_eight_cljs$logic$not_zero_QMARK_(e){
return (!((e === (0))));
});
twenty_fourty_eight_cljs.logic.transpose = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,cljs.core.mapv,cljs.core.vector);
twenty_fourty_eight_cljs.logic.append_zeros = (function twenty_fourty_eight_cljs$logic$append_zeros(row){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(row,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((4) - cljs.core.count(row)),(0)));
});
twenty_fourty_eight_cljs.logic.partition_identical_pair = (function twenty_fourty_eight_cljs$logic$partition_identical_pair(row){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.partition,(2),(2),null),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,row)));
});
twenty_fourty_eight_cljs.logic.evaluate = (function twenty_fourty_eight_cljs$logic$evaluate(row){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core._PLUS_),twenty_fourty_eight_cljs.logic.partition_identical_pair(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(twenty_fourty_eight_cljs.logic.not_zero_QMARK_,row)));
});
twenty_fourty_eight_cljs.logic.move_left = (function twenty_fourty_eight_cljs$logic$move_left(grid){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(twenty_fourty_eight_cljs.logic.append_zeros,twenty_fourty_eight_cljs.logic.evaluate),grid);
});
twenty_fourty_eight_cljs.logic.move_right = (function twenty_fourty_eight_cljs$logic$move_right(grid){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.reverse,twenty_fourty_eight_cljs.logic.append_zeros,twenty_fourty_eight_cljs.logic.evaluate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reverse], 0)),grid);
});
twenty_fourty_eight_cljs.logic.move_up = (function twenty_fourty_eight_cljs$logic$move_up(grid){
var G__23138 = twenty_fourty_eight_cljs.logic.move_left((twenty_fourty_eight_cljs.logic.transpose.cljs$core$IFn$_invoke$arity$1 ? twenty_fourty_eight_cljs.logic.transpose.cljs$core$IFn$_invoke$arity$1(grid) : twenty_fourty_eight_cljs.logic.transpose.call(null,grid)));
return (twenty_fourty_eight_cljs.logic.transpose.cljs$core$IFn$_invoke$arity$1 ? twenty_fourty_eight_cljs.logic.transpose.cljs$core$IFn$_invoke$arity$1(G__23138) : twenty_fourty_eight_cljs.logic.transpose.call(null,G__23138));
});
twenty_fourty_eight_cljs.logic.move_down = (function twenty_fourty_eight_cljs$logic$move_down(grid){
var G__23139 = twenty_fourty_eight_cljs.logic.move_right((twenty_fourty_eight_cljs.logic.transpose.cljs$core$IFn$_invoke$arity$1 ? twenty_fourty_eight_cljs.logic.transpose.cljs$core$IFn$_invoke$arity$1(grid) : twenty_fourty_eight_cljs.logic.transpose.call(null,grid)));
return (twenty_fourty_eight_cljs.logic.transpose.cljs$core$IFn$_invoke$arity$1 ? twenty_fourty_eight_cljs.logic.transpose.cljs$core$IFn$_invoke$arity$1(G__23139) : twenty_fourty_eight_cljs.logic.transpose.call(null,G__23139));
});
twenty_fourty_eight_cljs.logic.get_zero_indexes = (function twenty_fourty_eight_cljs$logic$get_zero_indexes(coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (x,y){
if((y === (0))){
return x;
} else {
return null;
}
}),coll);
});
twenty_fourty_eight_cljs.logic.flat_grid = (function twenty_fourty_eight_cljs$logic$flat_grid(grid){
return cljs.core.vec(cljs.core.flatten(grid));
});
twenty_fourty_eight_cljs.logic.add_random_twos = (function twenty_fourty_eight_cljs$logic$add_random_twos(grid){
var flatten_grid = twenty_fourty_eight_cljs.logic.flat_grid(grid);
var zero_indexes = twenty_fourty_eight_cljs.logic.get_zero_indexes(flatten_grid);
if(cljs.core.empty_QMARK_(zero_indexes)){
return (0);
} else {
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2((4),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flatten_grid,cljs.core.rand_nth(zero_indexes),(2)));
}
});
twenty_fourty_eight_cljs.logic.initial_grid = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(twenty_fourty_eight_cljs.logic.add_random_twos,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat,(4)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((4),(0)))),(2));
