const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 1,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 2,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 21,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

//   1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

//   **Пример:**
  
//   Предприятие 1 (45 сотрудников)
//   - Отдел тестирования (10 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Администрация (15 человек)
//   Предприятие 2 (75 сотрудников)
//   - Отдел разработки (50 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Отдел охраны труда (5 сотрудников)
//   Предприятие 3 (нет сотрудников)
//   - Отдел аналитики (нет сотрудников)

function strEmployeesCount(count) {
    let employees_str
    if (count == 0)
        return " (нет сотрудников)"
    else if (count % 10 == 1 && count % 100 != 11)
        employees_str = ' сотрудник'
    else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 > 20)) 
        employees_str = ' сотрудника'
    else
        employees_str = ' сотрудников'
    return " (" + count + employees_str + ")"
}

function showEnterprise(elem) {
    let enterprise_employees_count = 0
    for (let department of elem.departments)
        enterprise_employees_count = enterprise_employees_count + department["employees_count"]
    console.log(elem["name"] + strEmployeesCount(enterprise_employees_count))
    for (let department of elem.departments) 
        console.log("- "+ department["name"] + strEmployeesCount(department["employees_count"]))
}

console.log("задание 1")
console.log("=========")
enterprises.forEach(showEnterprise)
console.log("")


// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

function getEnterpriseName(p) {
    for (let enterprise of enterprises) {
        let c = enterprise.departments
        for (let department of enterprise.departments) 
            if (typeof(p) == "number" && department["id"] == p)
                console.log(enterprise["name"])
            else if (typeof(p) == "string" && department["name"] == p)
                console.log(enterprise["name"])
        
    }
}

console.log("задание 2")
console.log("========= getEnterpriseName 4")
getEnterpriseName(4)
console.log("========= getEnterpriseName Отдел маркетинга")
getEnterpriseName("Отдел маркетинга")
console.log("")


// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

let enterprises_new = enterprises.slice()

function getMaxId() {
    let r = 0
    for (let enterprise of enterprises_new) {
        if (enterprise["id"] > r)
            r = enterprise["id"]
        for (let department of enterprise.departments) 
            if (department["id"] > r )
                r = department["id"]
    }
    return r
}

function addEnterprise(enterprise_name) {
    let enterprise_new = {id : getMaxId()+1, name : enterprise_name, departments: []}
    console.log(enterprise_new)
    enterprises_new.push(enterprise_new)
}

console.log("задание 3")
console.log("========= addEnterprise")
addEnterprise("Новое предприятие")
addEnterprise("Рога и Копыта")
console.log("")


// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

function addDepartment(enterprise_id, department_name) {
    let enterprise = enterprises_new.find((elem) => {if (elem.id == enterprise_id) return elem})
    let departments = enterprise.departments

    departments.push({id : getMaxId()+1, name : department_name, employees_count : 0})
    console.log(departments)
}

console.log("задание 4")
console.log("========= addDepartment")
addDepartment(1, "Отдел друзей")
addDepartment(12, "Отдел досуга")
console.log("")


// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

function show_rename_info(id, name_old, name_new) {
  console.log("id = " + id +  " " + name_old + " >>> " + name_new)
}

function editEnterprise(enterprise_id, enterprise_name) {
    let enterprise = enterprises_new.find(elem => elem.id == enterprise_id)
    show_rename_info(enterprise.id, enterprise.name, enterprise_name)
    enterprise.name = enterprise_name
}

console.log("задание 5")
console.log("========= editEnterprise")
editEnterprise(1, "Новое название предприятия 1")
editEnterprise(12, "Винни-Пух и Пятачок")
console.log("")

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

function editDepartment(department_id, department_name) {
    for (let enterprise of enterprises_new) {
        department = enterprise.departments.find(elem => elem.id == department_id)
        if (department) {
            show_rename_info(department.id, department.name, department_name)
            department.name = department_name
        }
    }
}

console.log("задание 6")
console.log("========= editDepartment")
editDepartment(7, "Рекламный отдел")
console.log("")


// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

function deleteEnterprise(enterprise_id) {
    // enterprises_new = enterprises_new.filter((elem) => {if (elem.id != enterprise_id) return elem})
    const i = enterprises_new.findIndex(elem => elem.id == enterprise_id)
    if (i != -1)
        enterprises_new.splice(i, 1)
    else
        console.log("предприятие с id=" + enterprise_id + " не найдено")
}

console.log("задание 7")
console.log("========= deleteEnterprise(1)")
deleteEnterprise(1)
console.log(enterprises_new)
console.log("")


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

function deleteDepartment(department_id) {
    for (let enterprise of enterprises_new) {
        enterprise.departments = enterprise.departments.filter((elem) => {if (!(elem.id == department_id && elem.employees_count == 0)) return elem})
        console.log(enterprise.departments)
    }

}

console.log("задание 8")
console.log("========= deleteDepartment(7)")
deleteDepartment(7)
console.log("")


// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

function moveEmployees(from_id, to_id) {
    for (let enterprise of enterprises_new) {
        let from_dep = enterprise.departments.find((elem) => {if (elem.id == from_id) return elem})
        let to_dep = enterprise.departments.find((elem) => {if (elem.id == to_id) return elem})
        if (from_dep && to_dep) {
            console.log(enterprise.name, from_dep, to_dep)
            to_dep.employees_count = to_dep.employees_count + from_dep.employees_count
            from_dep.employees_count = 0
            console.log(enterprise.name, from_dep, to_dep)
        }  
    }
}

console.log("задание 9")
console.log("========= moveEmployees(6, 7)")
moveEmployees(6, 7)
console.log("")
