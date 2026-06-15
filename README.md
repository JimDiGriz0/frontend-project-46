### Hexlet tests and linter status:

[![Actions Status](https://github.com/JimDiGriz0/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/JimDiGriz0/frontend-project-46/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=JimDiGriz0_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=JimDiGriz0_frontend-project-46)

## App description:

### Demostration / Демонстрация

[![asciicast](https://asciinema.org/a/SGwrwtUV7RxyJZeb.svg)](https://asciinema.org/a/SGwrwtUV7RxyJZeb)

### Frontend Project: Difference Generator (gendiff)

### Description

This is a command-line interface (CLI) application developed as part of the "Frontend Developer" curriculum on the **Hexlet** educational platform.

The program compares two configuration files and clearly displays the differences between them in the terminal.

---

### Supported File Formats:

- `JSON` (`.json`)
- `YAML` (`.yaml`, `.yml`)

### Supported Output Formats:

- `stylish` - structured string output styled after a JSON object
- `plain` - text format describing the changes
- `json` - raw difference tree as a JSON string

---

### Minimum System Requirements:

Node.js >= v13.2.0

---

### Installation:

#### Run the following commands:

```bash
git clone git@github.com:JimDiGriz0/frontend-project-46.git
```

```bash
make install
```

```bash
npm link
```

To enable filename autocompletion for the command:

```bash
echo "complete -A file gendiff" >> ~/.bashrc
source ~/.bashrc
```

---

### RUS

---

### Фронтенд проект: Вычислитель отличий (gendiff)

---

### Описание

Это консольное приложение (CLI), разработанное в рамках обучения профессии «Фронтенд-разработчик» на образовательной платформе **Hexlet**.

Программа сравнивает два конфигурационных файла и наглядно выводит разницу между ними в терминал.

---

### Поддерживаемые форматы файлов:

- `JSON` (`.json`)
- `YAML` (`.yaml`, `.yml`)

### Поддерживаемые форматы вывода:

- `stylish` - структурированный вывод строки в стиле объекта JSON
- `plain` - текстовый формат, описывающий изменения
- `json` - дерево различий в формате JSON-строки

---

### Минимальные системные требования:

Node.js >= v13.2.0

---

### Установка:

#### Введите команды:

```bash
git clone git@github.com:JimDiGriz0/frontend-project-46.git
```

```bash
make install
```

```bash
npm link
```

Для подключения автокмоплита имен файлов:

```bash
echo "complete -A file gendiff" >> ~/.bashrc
source ~/.bashrc
```
