// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__25447__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25448__i = 0, G__25448__a = new Array(arguments.length -  0);
while (G__25448__i < G__25448__a.length) {G__25448__a[G__25448__i] = arguments[G__25448__i + 0]; ++G__25448__i;}
  args = new cljs.core.IndexedSeq(G__25448__a,0,null);
} 
return G__25447__delegate.call(this,args);};
G__25447.cljs$lang$maxFixedArity = 0;
G__25447.cljs$lang$applyTo = (function (arglist__25449){
var args = cljs.core.seq(arglist__25449);
return G__25447__delegate(args);
});
G__25447.cljs$core$IFn$_invoke$arity$variadic = G__25447__delegate;
return G__25447;
})()
);

(o.error = (function() { 
var G__25450__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25451__i = 0, G__25451__a = new Array(arguments.length -  0);
while (G__25451__i < G__25451__a.length) {G__25451__a[G__25451__i] = arguments[G__25451__i + 0]; ++G__25451__i;}
  args = new cljs.core.IndexedSeq(G__25451__a,0,null);
} 
return G__25450__delegate.call(this,args);};
G__25450.cljs$lang$maxFixedArity = 0;
G__25450.cljs$lang$applyTo = (function (arglist__25452){
var args = cljs.core.seq(arglist__25452);
return G__25450__delegate(args);
});
G__25450.cljs$core$IFn$_invoke$arity$variadic = G__25450__delegate;
return G__25450;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
