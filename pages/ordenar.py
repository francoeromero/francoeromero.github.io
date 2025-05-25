import os
import re

folder_path = r"D:\Escritorio\lux\nazca1958\pages"

# Obtener la lista de archivos JPG en la carpeta
files = [f for f in os.listdir(folder_path) if re.match(r'\d+\.jpg$', f)]
files.sort(key=lambda x: int(os.path.splitext(x)[0]))  # Ordenar numéricamente

# Definir los nuevos archivos que se insertarán después del 5.jpg
new_files = ["X1.jpg", "X2.jpg"]
insertion_index = 5  # Insertar después de "5.jpg"

# Renombrar los archivos existentes para hacer espacio
for i in range(len(files) - 1, insertion_index - 1, -1):
    old_name = files[i]
    new_name = f"{i + len(new_files) + 1}.jpg"
    os.rename(os.path.join(folder_path, old_name), os.path.join(folder_path, new_name))

# Renombrar los nuevos archivos
for i, new_file in enumerate(new_files):
    new_name = f"{insertion_index + i + 1}.jpg"
    os.rename(os.path.join(folder_path, new_file), os.path.join(folder_path, new_name))