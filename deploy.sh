npm run build
scp -r -P 2200 ./dist/** deploy@xavierjulien.fr:/volume2/web/mccb_ng/
