
// разностронний 
// равнобедренный
// несуществующий - не 0 и сумма двух не больше третей
// равносторонний

// три стороны треугольника
// выводить какой это треугольник по нажатию кнопки

console.log('Привет')

// пустой выводить
// ввод букв кроме цифр

// для каждого отдельно


const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const num3 = document.getElementById('num3')
const rashet = document.getElementById('rashet')
const answer = document.getElementById('answer')



function getTrey() {

    let a = num1.value
    let b = num2.value
    let c = num3.value

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {

        a = Number(a)
        b = Number(b)
        c = Number(c)

        if ((a+b>c) && (a+c>b) && (b+c>a) && (a>0) &&(b>0) && (c>0)) {

            if ((a === b) && (b === c)) {
                answer.textContent = "Равностронний треугольничек"
                num1.value = ''
                num2.value = ''
                num3.value = ''

            } else {

                if (!(a === b) && !(b === c) && !(a === c)) {
                    answer.textContent = "Разностронний треугольничек"
                    num1.value = ''
                    num2.value = ''
                    num3.value = ''

                } else {
                    answer.textContent = "Равнобудренный треугольничек"
                    num1.value = ''
                    num2.value = ''
                    num3.value = ''
                }

            }
            
        } else {
           answer.textContent = "Несуществующий треугольничек"
            num1.value = ''
            num2.value = ''
            num3.value = '' 
        }

    } else {
        answer.textContent = "Ты ввел не числовое значение"
    }
}

rashet.addEventListener('click', getTrey)