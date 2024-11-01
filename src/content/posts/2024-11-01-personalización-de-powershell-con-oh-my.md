---
title: Personalización de PowerShell con Oh My
description: ""
pubDate: 2024-11-01T18:36:53.255Z
category: "tutoriales"
banner: "https://i.postimg.cc/kD30jwr9/maxresdefault.jpg"
banner2: ""
tags: [PowerShell, Oh My Posh, Personalización, Windows Terminal, Nerd Fonts, Terminal, Configuración]
selected: false
fmContentType: 
[keywords]: [ PowerShell personalización, instalar Oh My Posh, fuentes Nerd Fonts, Windows Terminal, temas PowerShell, perfil PowerShell, configuración terminal]

---

En este tutorial, aprenderás a personalizar tu PowerShell usando **Oh My Posh**. Oh My Posh es una herramienta que permite mejorar la apariencia de tu terminal agregando temas atractivos y funcionalidades adicionales.

## Requisitos Previos

- Tener **PowerShell** (versión 7 o superior recomendada).
- Tener **Windows Terminal** instalado (opcional pero recomendable para una mejor experiencia).
- Tener **Administrador de paquetes** como [**winget**](https://github.com/microsoft/winget-cli) o **Chocolatey**.

## Paso 1: Instalar Oh My Posh

Primero, necesitamos instalar Oh My Posh. Puedes hacerlo utilizando **winget** o **PowerShell** directamente.

```powershell
# Instalación con winget
winget install JanDeDobbeleer.OhMyPosh

# Instalación con PowerShell
Install-Module oh-my-posh -Scope CurrentUser -AllowPrerelease -Force
```

Después de instalar, puedes verificar la instalación ejecutando el siguiente comando:

```powershell
oh-my-posh --version
```

## Paso 2: Instalar una Fuente Patched

Para aprovechar al máximo los temas de Oh My Posh, necesitas instalar una **fuente con íconos** (nerd fonts). Te recomiendo **Cascadia Code Nerd Font**.

1. Ve a la página de [Nerd Fonts](https://www.nerdfonts.com/).
2. Descarga la fuente "Cascadia Code Nerd Font".
3. Instala la fuente haciendo doble clic en el archivo `.ttf` descargado.

Una vez instalada, asegúrate de configurarla como la fuente predeterminada en **Windows Terminal** o el editor que estés utilizando.

## Paso 3: Aplicar un Tema de Oh My Posh

Oh My Posh tiene muchos temas disponibles que puedes utilizar. Para ver una lista de todos los temas:

```powershell
oh-my-posh get themes
```

Para aplicar un tema, puedes usar el siguiente comando, reemplazando `<nombre_del_tema>` por el tema de tu elección:

```powershell
oh-my-posh init pwsh --config "$(oh-my-posh get theme <nombre_del_tema>)" | Invoke-Expression
```

Por ejemplo, para usar el tema "paradox":

```powershell
oh-my-posh init pwsh --config "$(oh-my-posh get theme paradox)" | Invoke-Expression
```

## Paso 4: Hacer la Configuración Permanente

Para mantener esta configuración en todas tus sesiones de PowerShell, debes agregar la configuración al archivo de perfil de PowerShell.

1. Abre el archivo de perfil ejecutando:

   ```powershell
   notepad $PROFILE
   ```

2. Agrega la línea que aplica el tema. Por ejemplo:

   ```powershell
   oh-my-posh init pwsh --config "$(oh-my-posh get theme paradox)" | Invoke-Expression
   ```

3. Guarda y cierra el archivo.

Ahora, cada vez que abras PowerShell, verás tu tema personalizado.

## Paso 5: Personalizar tu Tema

Puedes crear tu propio tema personalizado. Para ello, copia un archivo de configuración existente, edítalo y luego usa la ruta de ese archivo como tu configuración.

1. Primero, copia un archivo de configuración base a una ubicación de tu elección:

   ```powershell
   oh-my-posh get theme paradox > $HOME\my-custom-theme.omp.json
   ```

2. Abre el archivo con un editor de texto (por ejemplo, Visual Studio Code):

   ```powershell
   code $HOME\my-custom-theme.omp.json
   ```

3. Personaliza los colores, íconos y segmentos a tu gusto.

4. Luego, aplica tu tema personalizado:

   ```powershell
   oh-my-posh init pwsh --config "$HOME\my-custom-theme.omp.json" | Invoke-Expression
   ```

## ¡Listo!

Ahora tu PowerShell está personalizado con Oh My Posh. Puedes experimentar con diferentes temas y ajustar los detalles para que tu terminal se vea exactamente como deseas.

## Recursos Adicionales

- [Documentación oficial de Oh My Posh](https://ohmyposh.dev/docs/).
- [Página oficial de Nerd Fonts](https://www.nerdfonts.com/).

¡Diviértete personalizando tu terminal y haz que sea única y más funcional!
