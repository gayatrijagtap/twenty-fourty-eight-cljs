(ns ^:figwheel-no-load twenty-fourty-eight-cljs.dev
  (:require
    [twenty-fourty-eight-cljs.core :as core]
    [devtools.core :as devtools]))

(extend-protocol IPrintWithWriter
  js/Symbol
  (-pr-writer [sym writer _]
    (-write writer (str "\"" (.toString sym) "\""))))

(enable-console-print!)

(devtools/install!)

(core/init!)
