#estruturas de repeticao break

numero = -1

while numero != 0:
    numero = int(input("Informe um numero: "))

    if numero == 10:
        break

    print(numero)


for numero in range(100):
    
    if numero == 12:
        continue

    print(numero, end= " ")