#!/usr/bin/env python
# -*- coding: utf-8 -*-

'''
Decifrar el mensaje de "CompuTrabajo Argentina":
ΣΦΨΞΔλΨΔΛΣΦΔλΨξΔϗΞΔΦΨΞϑλΨΛΣΘϑΞϗΦϑλΨΣΞΨλϑΞΨζβΣφΔΨΣΦΨΣΞΨξΛϗΞΞϑΨϖΣΞΨΠΣϖΛΣφΔΞΨΩΨΠΛΣΦ
ϖϗϖϑΨΔΨΞΔΨΘΔφϗΔΨϖΣΨΞϑλΨΓΔΘϗΦϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣλΨξΔΦϖΣΛΔΨϖΣΨΦϗΣξΞΔΨ
λβΨΠϑΦΓΡϑΨΔΞΨαϗΣΦμϑΨΞϑΨλΔΞβϖΔΦΨΞΔλΨεΞΔβμΔλΨϖΣΞΨΠΔζϑΦΔΞΨΩΨΔΦϗΘΔΦϖϑΨΞΔΨμΛϑΠΔΨΠΔΛΨΣ
λϑλΨΓΣΛΛϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΞΔλΨΠΣΦΔλΨΩΨΞΔλΨαΔηβϗμΔλΨλΣΨαΔΦΨΠΔΛΨΞΔΨΘϗ
λΘΔΨλΣΦϖΔΨΞΔλΨΠΣΦΔλΨλϑΦΨϖΣΨΦϑλϑμΛϑλΨΞΔλΨαΔηβϗμΔλΨλϑΦΨΔζΣΦΔλ

Autor: Nico Antonelli - Versión 1.0

'''

# Con UTF-8 especificado, ahora coloco el mensaje completo en una String 
challengeMSG = "ΣΦΨΞΔλΨΔΛΣΦΔλΨξΔϗΞΔΦΨΞϑλΨΛΣΘϑΞϗΦϑλΨΣΞΨλϑΞΨζβΣφΔΨΣΦΨΣΞΨξΛϗΞΞϑΨϖΣΞΨΠΣϖΛΣφΔΞΨΩΨΠΛΣΦϖϗϖϑΨΔΨΞΔΨΘΔφϗΔΨϖΣΨΞϑλΨΓΔΘϗΦϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣλΨξΔΦϖΣΛΔΨϖΣΨΦϗΣξΞΔΨλβΨΠϑΦΓΡϑΨΔΞΨαϗΣΦμϑΨΞϑΨλΔΞβϖΔΦΨΞΔλΨεΞΔβμΔλΨϖΣΞΨΠΔζϑΦΔΞΨΩΨΔΦϗΘΔΦϖϑΨΞΔΨμΛϑΠΔΨΠΔΛΨΣλϑλΨΓΣΛΛϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΞΔλΨΠΣΦΔλΨΩΨΞΔλΨαΔηβϗμΔλΨλΣΨαΔΦΨΠΔΛΨΞΔΨΘϗλΘΔΨλΣΦϖΔΨΞΔλΨΠΣΦΔλΨλϑΦΨϖΣΨΦϑλϑμΛϑλΨΞΔλΨαΔηβϗμΔλΨλϑΦΨΔζΣΦΔλ";
print("Mensaje:")
print(challengeMSG)

# Ahora la Mapeamos en un Dictionary (Como un Map en C++ o un JS Object en Javascript)
diccionario = {}
for letter in challengeMSG:
    if letter in diccionario: diccionario[letter]=diccionario[letter]+1 # Sumamos 1 a la letra
    else: diccionario.update({letter:1}) # Si la letra no está en el diccionario, arranca en 1

# Convertimos el Dictonary en un Array de Keys, ordenadas decrecientemente según su Value
display = sorted(diccionario,key=diccionario.__getitem__,reverse=True)

# Puede verse que la distribución y cantidad de símbolos se parece al alfabeto español
print()
print("Distribución:",diccionario)
print("Ordenado:",display)
print(len(display),"Símbolos")

# Creo un String de símbolos para comparar y reemplazar en el mensaje (El "espacio en blanco" es también un símbolo!!)
# Distribución Alfabeto Español (27 - Sobrarán Letras): E A O S R N I D L C T U M P B G V Y Q H F Z J Ñ X K W.

# esp = " EAOSRNIDLCTUMPBGVYQHFZJÑXKW" # Modifico mejor un poco la distribución porque carece de sentido
esp = " AELSORNIDPVMUTBJGYCQHFZÑXKW" # Fui alternando pares de letras hasta que comenzó a tener sentido!

# Otras distribuciones probadas
# eng = " ETAOINSRHDLUCMFYWGPBVKXQJZ"
# latin = " IEAUTSRNOMCLPDBQGVFHXYZK"

# Recorro el mensaje, y reemplazo los símbolos con respecto a su posición equivalente en mi String
challengeMSG = list(challengeMSG)
for i in range(len(challengeMSG)):
    for j in range(len(display)):
        if challengeMSG[i]==display[j]: challengeMSG[i]=esp[j]
challengeMSG = "".join(challengeMSG)

# Muestro el Mensaje Traducido
print()
print("Traducción:")
print(challengeMSG) # Spolier: Es parte de la letra de una canción de Atahualpa Yupanki!
