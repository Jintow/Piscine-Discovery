count=0
if [ $# -eq 0 ]
then
	echo "No arguments supplied"
fi
for i in $@
do
	count=$((count+1))
	if [ "$count" -ge 4 ]
		then
		break
	fi
	echo $i
done

