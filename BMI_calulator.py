import os
name1 = 'YK'
height_m1 = 2
weight_kg1 = 90

name2 = "YK's sister"
height_m2 = 1.8
weight_kg2 = 70

name3 = "YK's brother"
height_m3 = 2.5
weight_kg3 = 160


def bmi_calculator(name, height_m, weight_kg):
    """A function to calculate the BMI. """

    bmi = weight_kg / (height_m ** 2)

    if bmi >= 25:
        print("You ARE overweight, and you have a BMI of {}".format(bmi))
    else:
        print("You are NOT overweight, and you have a BMI of {}".format(bmi))


bmi_calculator(name3, height_m3, weight_kg3)

os.system('PAUSE')
