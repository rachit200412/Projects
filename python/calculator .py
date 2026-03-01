num1 = float(input("Enter a number: "))
num2 = float(input("Enter another number: "))

print("\n Select a Operation")
print("1. Add")
print("2. Subtract")
print("3. Multiply")
print("4. Divide")

choice = input("Enter a number 1-4:" )

if choice =="1":
    result = num1 + num2
    print( "result = ", result )
elif choice == "2":
    result =num1 -num2
    print("result = ", result )
elif choice == "3":
    result = num1 * num2
    print("result = ", result )
elif choice == "4":
    if num2 != 0:
        result = num1 / num2
        print("result = ", result)
    else:
        print("error division by Zero not possible ")
else:
    print("invalid ")