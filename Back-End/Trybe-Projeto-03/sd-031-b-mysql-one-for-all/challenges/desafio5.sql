SELECT 
  c.cancoes_nome AS cancao, 
  COUNT(h.id_cancao) AS reproducoes
FROM SpotifyClone.cancoes c
LEFT JOIN SpotifyClone.historico h ON c.id_cancoes = h.id_cancao
GROUP BY c.cancoes_nome
ORDER BY reproducoes DESC, cancao
LIMIT 2;


