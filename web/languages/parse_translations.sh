#!/bin/sh
./parsemustache.js

if [ ! -f temp/$1.pot ]
then
	cp potHeader.pot temp/$1.pot
fi

find ./temp ../src/js -iname "*.js" | xargs xgettext --language JavaScript -k -kt -ktp:1,2 -o temp/$1.pot --no-wrap --no-location --force-po --sort-output -j --from-code utf-8 --copyright-holder "copyright Holder" --package-name "Package Name" --package-version "Package Version"

# PULIR
msgen temp/$1.pot | msgattrib --set-fuzzy --clear-obsolete > $1tmp.po
#msgmerge --no-wrap --no-location --sort-output -v -U $1.pot temp/tmp.po

if [ ! -f $1.po ]
then
    msginit --no-wrap --no-translator -l "$1.UTF-8" -i temp/$1.pot -o $1.po
else
    msgmerge --no-wrap --no-location --sort-output --previous --no-fuzzy-matching -v -U $1.po $1tmp.po
fi

# quitar los obsolete
more $1.po | msgattrib --clear-obsolete > $1tmp.po
mv $1tmp.po $1.po

# #!/bin/sh
# ./parsemustache.js $2

# if [ ! -f temp/$2_$1.pot ]
# then
# 	cp potHeader.pot temp/$2_$1.pot
# fi
# #find ./temp ../web -iname "*.js" ! -path "../web/packages/*"  ! -path "../web/_lb/*" ! -path "../web/dist/*" ! -path "../web/tools/*" ! -path "../web/node_modules/*" | xargs xgettext --language JavaScript -k -kt -ktp:1,2 -o temp/$1.pot --no-wrap --no-location --force-po --sort-output -j --from-code utf-8 --copyright-holder "copyright Holder" --package-name "Package Name" --package-version "Package Version"
# find ./temp/temp_$2.js ../web/$2 -iname "*.js" ! -path "../_lb/*" ! -path "../tools/*" ! -path "../node_modules/*" | xargs xgettext --language JavaScript -k -kt -ktp:1,2 -o temp/$2_$1.pot --no-wrap --no-location --force-po --sort-output -j --from-code utf-8 --copyright-holder "copyright Holder" --package-name "Package Name" --package-version "Package Version"

# # PULIR
# msgen temp/$2_$1.pot | msgattrib --set-fuzzy --clear-obsolete > $2_$1tmp.po
# #msgmerge --no-wrap --no-location --sort-output -v -U $1.pot temp/tmp.po

# if [ ! -f $2_$1.po ]
# then
#     msginit --no-wrap --no-translator -l "$1.UTF-8" -i temp/$2_$1.pot -o $2_$1.po
# else
#     msgmerge --no-wrap --no-location --sort-output --previous --no-fuzzy-matching -v -U $2_$1.po $2_$1tmp.po
# fi

# # quitar los obsolete
# more $2_$1.po | msgattrib --clear-obsolete > $2_$1tmp.po
# mv $2_$1tmp.po $2_$1.po