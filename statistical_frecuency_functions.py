# Functions for Statisical Calcutations WITH AN ARRAY OF FECUENCIES
# By: Nico Antonelli

def average_with_frecuency(array, factor):
    total = 0
    # Mathematic Spectation (Discrete Variable) Ecuation
    for i in range(len(array)):
        total += i*array[i]
    total /= factor
    return round(total, 6)

def variance_with_frecuency(array, factor):
    total = 0
    mean = average_with_frecuency(array, factor)
    # Variance (Discrete Variable) Ecuation
    for i in range(len(array)):
        total += ((i - mean)**2) * array[i]
    total /= factor
    return round(total, 6)

def deviation_calc(variance):
    # Deviation is the Square Root of Variance
    return round(variance**0.5, 6)

def variance_with_frecuency_alternative(array, factor):
    total = 0
    mean = average_with_frecuency(array, factor)
    for i in range(len(array)):
        total += i*i*array[i]
    total /= factor
    total = total-mean**2
    return round(total, 6)

if __name__ == "__main__":
    print("Cool Functions (but not optimized)")
