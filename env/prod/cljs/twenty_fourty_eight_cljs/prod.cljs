(ns twenty-fourty-eight-cljs.prod
  (:require
    [twenty-fourty-eight-cljs.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
