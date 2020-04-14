# Codecademy-Calculating-Churn-Rate-Project
My solution to the project provided by codecademy
 SELECT * FROM subscriptions
 LIMIT 100;
 -- 2 Segments, 30s and 87s

SELECT DISTINCT 
       strftime('%m', subscription_start),
       strftime('%m', subscription_end)
FROM subscriptions GROUP BY subscription_start;
-- See those 4 months (DEC-MAR)?

WITH months AS (
  SELECT
  '2017-01-01' AS first_day,
  '2017-01-31' AS last_day
  UNION
  SELECT
  '2017-02-01' AS first_day,
  '2017-02-28' AS last_day
  UNION
  SELECT
  '2017-03-01' AS first_day,
  '2017-03-31' AS last_day
),
tempo AS (
  SELECT subscriptions.*, months.*
  FROM subscriptions CROSS JOIN months
),
status AS (
  SELECT id, first_day AS month,
  CASE
    WHEN segment = 87 AND (
    subscription_start < first_day
    AND (subscription_end >= first_day 
         OR(subscription_end IS NULL))
    )
    THEN 1
    ELSE 0
  END AS is_active_87,
  CASE
    WHEN segment = 30 AND (
    subscription_start < first_day
    AND (subscription_end >= first_day 
         OR(subscription_end IS NULL))
    )
    THEN 1
    ELSE 0
  END AS is_active_30,
  CASE
    WHEN segment = 87 AND (
    subscription_start < first_day
    AND (subscription_end BETWEEN first_day AND last_day)
    )
    THEN 1
    ELSE 0
  END AS is_canceled_87,
  CASE
    WHEN segment = 30 AND (
    subscription_start < first_day
    AND (subscription_end BETWEEN first_day AND last_day)
    )
    THEN 1
    ELSE 0
  END AS is_canceled_30
  FROM tempo
),
status_aggregate AS (
SELECT month,
       SUM(is_active_87) as 'sum_active_87', 
       SUM(is_active_30) as 'sum_active_30',
       SUM(is_canceled_87) as 'sum_canceled_87',
       SUM(is_canceled_30) as 'sum_canceled_30'
FROM status GROUP BY month
)
SELECT month,
       100.0 * (sum_canceled_87) / (sum_active_87) AS 'churn_87',
       100.0 * (sum_canceled_30) / (sum_active_30) AS 'churn_30'
FROM status_aggregate;
