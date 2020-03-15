(ns twenty-fourty-eight-cljs.logic)

(defn not-zero? [e] (not (zero? e)))

(def transpose (partial apply mapv vector))

(defn append-zeros [row]
  (concat row (repeat (- 4 (count row)) 0)))

(defn partition-identical-pair [row]
  (apply concat (map (partial partition 2 2 nil)
                     (partition-by identity row))))

(defn evaluate [row]
  (->> row
       (filter not-zero?)
       partition-identical-pair
       (map (partial reduce +))))

(defn move-left [grid]
  (map (comp append-zeros evaluate) grid))

(defn move-right [grid]
  (map (comp reverse append-zeros evaluate reverse) grid))

(defn move-up [grid]
  (transpose (move-left (transpose grid))))

(defn move-down [grid]
  (transpose (move-right (transpose grid))))

(defn get-zero-indexes [coll]
  (keep-indexed (fn [x y] (when (zero? y) x)) coll))


(defn flat-grid [grid]
  (vec (flatten grid)))


(defn add-random-twos [grid]
  (let [flatten-grid (flat-grid grid) zero-indexes (get-zero-indexes flatten-grid)]
    (if (empty? zero-indexes) 0 (partition 4 (assoc flatten-grid (rand-nth zero-indexes) 2)))))


(def initial-grid
  (nth (iterate add-random-twos (mapv (partial repeat 4) (repeat 4 0))) 2))
