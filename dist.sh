git checkout dist
git merge master
git add .
npm run build
git add .
git commit -m 'Update'
git push origin dist
git checkout master
