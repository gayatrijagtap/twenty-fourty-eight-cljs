(ns twenty-fourty-eight-cljs.core
    (:require
      [reagent.core :as reagent :refer [atom]]
      [twenty-fourty-eight-cljs.logic :as l]))

;; -------------------------
;; Views

(defn home-page []
  [:div [:h2 "Welcome to Reagent hello"]])


(defn get-background-color [n]
  (case n
    0 "#f6eedf"
    2 "#ffd3b6"
    4 "#ffc8bd"
    8 "#f2b179"
    16 "#f59563"
    32 "#f67c5f"
    64 "#f65e3b"
    128 "#edcf72"
    256 "#edcc61"
    512 "#fcc169"
    1024 "#efb1ff"
    2048 "#7f78d2"
    )
  )

(defn get-text-color [n]
  (case n
    0 "#776e65"
    2 "#776e65"
    4 "#776e65"
    8 "#f9f6f2"
    16 "#f9f6f2"
    32 "#f9f6f2"
    64 "#f9f6f2"
    128 "#f9f6f2"
    256 "#f9f6f2"
    512 "#f9f6f2"
    1024 "#f9f6f2"
    2048 "#f9f6f2"
    ))

(def initial-game {:board l/initial-grid :is-over false})

(def game (reagent/atom initial-game))

(defn cell [c]
  [:div {:class ["cell"] :style {:background-color (get-background-color c) :color (get-text-color c)}} (if (zero? c) " " c)])

(defn row [r]
  [:div {:class ["row"]} (map cell r)])

(defn update-state [updated-grid]
  (if (zero? updated-grid) {:board updated-grid :is-over true} {:board updated-grid :is-over false})
  )

(defn move-grid-up [game]
  (let [updated-grid ((comp l/add-random-twos l/move-up) (:board game))]
    (update-state updated-grid))
  )

(defn move-grid-down [game]
  (let [updated-grid ((comp l/add-random-twos l/move-down) (:board game))]
    (update-state updated-grid))
  )

(defn move-grid-left [game]
  (let [updated-grid ((comp l/add-random-twos l/move-left) (:board game))]
    (update-state updated-grid))
  )

(defn move-grid-right [game]
  (let [updated-grid ((comp l/add-random-twos l/move-right) (:board game))]
    (update-state updated-grid))
  )

(defn reset-game []
  (reset! game initial-game))

(defn show-game-over []
  [:div {:class "game-over"} [:div "Game Over"] [:button {:class "play-again" :on-click reset-game} "Play Again"]])

(defn board []
  [:div
   {:class       ["board"]
    :autofocus   1
    :tabindex    1
    :on-key-down (fn [key-char]
                   (case
                     (.-which key-char)
                     37 (swap! game move-grid-left)
                     38 (swap! game move-grid-up)
                     39 (swap! game move-grid-right)
                     40 (swap! game move-grid-down)
                     )
                   )}
   (if (:is-over @game) (show-game-over) (map row (:board @game)))
   ])


;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [board] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
