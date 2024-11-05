a: int = 2
b: int = 3
c: int = a + b
print(c)

def list_sum(*args:int)->int:
    return sum(args)

result = list_sum(1, 2, 3, 4, 5)
print(result)