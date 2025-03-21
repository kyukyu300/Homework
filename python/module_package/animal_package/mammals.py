class dog:
    def __init__(self, species, age):
        self.species = species
        self.age = age

    def introduce(self):
        print(f'이 강아지는 {self.species}이고, 수명은 {self.age}년 입니다.')