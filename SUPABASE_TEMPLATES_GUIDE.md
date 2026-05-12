# 📘 Guía: Cómo agregar nuevos Templates a Supabase

Cada vez que crees una nueva plantilla (template) en el frontend (como `sakura`, `love_letter`, etc.), debes asegurarte de que la base de datos de Supabase la reconozca, de lo contrario recibirás un error al intentar guardar un mensaje.

La tabla `messages` utiliza un tipo de dato **ENUM** (enumeración) llamado `message_template` para la columna `template`. Esto significa que la base de datos solo acepta una lista estricta de palabras permitidas.

## Pasos para registrar un nuevo template:

1. Ve a tu panel de **Supabase**.
2. En el menú lateral izquierdo, selecciona el **SQL Editor** (el icono de `>_` terminal).
3. Haz clic en **New Query**.
4. Copia, pega y ejecuta el siguiente código, reemplazando `'nombre_del_nuevo_template'` por el ID que le asignaste en tu código React (por ejemplo, `'sakura'` o `'galaxia'`):

```sql
ALTER TYPE message_template ADD VALUE 'nombre_del_nuevo_template';
```

5. Haz clic en el botón verde **Run**.

¡Y eso es todo! Al hacer esto, Supabase agregará la nueva opción a su lista de valores permitidos y los formularios de tu página web ya no arrojarán error al crear un mensaje con este nuevo diseño.

---

### 💡 Ejemplo real:
Cuando agregamos la plantilla del **Jardín Sakura**, el ID que le dimos en React fue `'sakura'`. El comando exacto que corrimos fue:

```sql
ALTER TYPE message_template ADD VALUE 'sakura';
```
