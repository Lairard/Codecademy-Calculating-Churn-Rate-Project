SELECT COUNT (DISTINCT utm_campaign)
FROM page_visits; --8 campaigns

SELECT COUNT (DISTINCT utm_source)
FROM page_visits; --6 sources

SELECT DISTINCT utm_campaign, utm_source
FROM page_visits ORDER BY 2; 
/* campaigns use specific sources which best support the campaigns
according to each source's function */

SELECT DISTINCT page_name
FROM page_visits;

WITH first_touch AS (
     SELECT user_id,
     MIN(timestamp) as first_touch_at
     FROM page_visits
     GROUP BY user_id
),
first_touche AS (
     SELECT ft.user_id, ft.first_touch_at,
            pv.utm_source, pv.utm_campaign
     FROM first_touch ft
     JOIN page_visits pv
     ON ft.user_id = pv.user_id
     AND ft.first_touch_at = pv.timestamp
)
SELECT fte.utm_source, fte.utm_campaign,
       COUNT(*)
FROM first_touche fte GROUP BY 2
ORDER BY 3 DESC;
-- 622, 612, 576, 169

WITH last_touch AS (
     SELECT user_id,
     MAX(timestamp) as last_touch_at
     FROM page_visits
     GROUP BY user_id
),
last_touche AS (
     SELECT lt.user_id, lt.last_touch_at,
            pv.utm_source, pv.utm_campaign, pv.page_name
     FROM last_touch lt
     JOIN page_visits pv
     ON lt.user_id = pv.user_id
     AND lt.last_touch_at = pv.timestamp
)
SELECT lte.utm_source, lte.utm_campaign, lte.page_name,
       COUNT(*)
FROM last_touche lte GROUP BY 2
ORDER BY 4 DESC;
-- 447, 443, 245,232, 190, 184, 178, 60 For Campaigns
-- 98 landing, 457 cart, 1066 checkout, 358 purchase

WITH last_touch AS (
     SELECT user_id,
     MAX(timestamp) as last_touch_at
     FROM page_visits
     GROUP BY user_id
),
last_touche AS (
     SELECT lt.user_id, lt.last_touch_at,
            pv.utm_source, pv.utm_campaign, pv.page_name
     FROM last_touch lt
     JOIN page_visits pv
     ON lt.user_id = pv.user_id
     AND lt.last_touch_at = pv.timestamp
)
SELECT lte.utm_source, lte.utm_campaign, lte.page_name,
       COUNT(*)
FROM last_touche lte
WHERE lte.page_name LIKE '%purchase%'
GROUP BY 2 ORDER BY 4 DESC;
-- newsletter 114, retarget ad 112, retarget campaign 53,
-- paid search 52, getting to 9, ten crazy 9, interview 7,
-- cool 2

/*
For LTEs, weekly-newsletter must be invested further to reach 
maximum profit from last touches, followed by retargetting-ad. As for FTEs,  interview with cool tshirts founder, getting-to know-cool-tshirts, 
and ten-crazy-cool-tshirts-facts can be further invested to boost FTEs 
and thus boosting the LTEs
*/
