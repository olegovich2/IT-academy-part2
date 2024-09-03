/*Задача: Управление списком пользователей и их задач
Описание
Создайте приложение, которое будет выполнять следующие операции:
Получить список пользователей с сервера (реальный запрос делать не надо, имитировать ответ с задержкой через setTimeOut).
Для каждого пользователя получить список задач.
Объединить данные пользователей и задач в один массив объектов.
Отобразить результат в консоли.

Шаги
Создайте функции для выполнения асинхронных запросов:
Функция fetchUsers должна возвращать промис, который разрешается списком пользователей.
Функция fetchTasksForUser должна принимать userId и возвращать промис, который разрешается списком задач для этого пользователя.
Создайте основную функцию loadUserData:
Функция должна использовать Promise.all для параллельного выполнения запросов.
Объедините данные пользователей и задач в один массив объектов.

Дополнительные задачи
Добавьте обработку ошибок:
Обработайте ошибки при выполнении запросов и выведите сообщение об ошибке в консоль.
Добавьте возможность фильтрации пользователей по количеству задач:
Фильтруйте пользователей, у которых количество задач больше заданного порога.
 */

const users = [
  { userId: 1, name: "Oksana" },
  { userId: 2, name: "Alia" },
  { userId: 3, name: "Kristina" },
  { userId: 4, name: "Vlad" },
  { userId: 5, name: "Kirill" },
  { userId: 6, name: "Andrew" },
];

const tasks = [
  { titleTask: "Task 1 for Oksana", userId: 1 },
  { titleTask: "Task 2 for Oksana", userId: 1 },
  { titleTask: "Task 1 for Alia", userId: 2 },
  { titleTask: "Task 2 for Alia", userId: 2 },
  { titleTask: "Task 3 for Alia", userId: 2 },
  { titleTask: "Task 1 for Kristina", userId: 3 },
  { titleTask: "Task 1 for Vlad", userId: 4 },
  { titleTask: "Task 2 for Vlad", userId: 4 },
  { titleTask: "Task 3 for Vlad", userId: 4 },
  { titleTask: "Task 1 for Kirill", userId: 5 },
  { titleTask: "Task 2 for Kirill", userId: 5 },
  { titleTask: "Task 3 for Kirill", userId: 5 },
  { titleTask: "Task 1 for Andrew", userId: 6 },
];

// Функция для получения пользователей
function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
}

// Функция для получения задач для конкретного пользователя
const fetchTasksForUser = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userTasks = tasks.filter((task) => task.userId === userId);
      resolve(userTasks);
    }, 1000);
  });
};

// Основная функция для загрузки данных пользователей и задач
async function loadUserData(taskThreshold) {
  try {
    const usersList = await fetchUsers();
    const tasksPromises = usersList.map((user) =>
      fetchTasksForUser(user.userId).then((userTasks) => ({
        ...user,
        tasks: userTasks,
      }))
    );
    const usersWithTasks = await Promise.all(tasksPromises);

    // Фильтрация пользователей по количеству задач
    const filteredUsers = usersWithTasks.filter(
      (user) => user.tasks.length > taskThreshold
    );
    // создание ошибки в случае пустого массива пользователей
    if (filteredUsers.length === 0) throw new Error("Not found users");
    console.log("Filtered Users:", filteredUsers);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
loadUserData(2);
