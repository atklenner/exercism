#!/usr/bin/env bash
return=""
if (( $1 % 3 == 0 ))
then
    return="${return}Pling"
fi
if (( $1 % 5 == 0 ))
then
    return="${return}Plang"
fi
if (( $1 % 7 == 0 ))
then
    return="${return}Plong"
fi
if [[ $return = "" ]]
then
    return="$1"
fi
echo $return