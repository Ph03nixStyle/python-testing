class Robot():
    def __init__(self, name, color, weight):
        self.name = name
        self.color = color
        self.weight = weight

    def introduce_self(self):
        print('My name is {}!'.format(self.name))


class Person():
    def __init__(self, n, p, i):
        self.name = n
        self.personnality = p
        self.is_sitting = i

    def sit_down(self):
        self.is_sitting = True

    def stand_up(self):
        self.is_sitting = False


r1 = Robot('myName', 'myColor', 30)

p1 = Person("Phoenix", 'Lunatic', True)
p1.robot_owned = r1
print(p1.robot_owned.name)
