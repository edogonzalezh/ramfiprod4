/**
 * RAMFI - Especialistas en Fijaciones Industriales
 * Archivo: main.js
 * Versión: 3.0 — Menú radial
 */

(function () {
    'use strict';

    // ==========================================================================
    // 1. MENÚ RADIAL — abrir / cerrar
    // ==========================================================================
    var menu   = document.getElementById('radialMenu');
    var btn    = document.getElementById('radialBtn');

    function abrirMenu() {
        menu.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
    }

    function cerrarMenu() {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
    }

    // Clic en el botón central: toggle
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (menu.classList.contains('open')) {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    });

    // Clic en cualquier enlace del menú radial → cerrar después
    menu.querySelectorAll('.radial-item').forEach(function (item) {
        item.addEventListener('click', function () {
            cerrarMenu();
        });
    });

    // Clic fuera del menú → cerrar
    document.addEventListener('click', function (e) {
        if (!menu.contains(e.target)) {
            cerrarMenu();
        }
    });

    // ==========================================================================
    // 2. SMOOTH SCROLL
    // ==========================================================================
    document.querySelectorAll('a[href^="#"]').forEach(function (enlace) {
        enlace.addEventListener('click', function (e) {
            var href = enlace.getAttribute('href');
            if (href === '#') return;
            var destino = document.querySelector(href);
            if (!destino) return;
            e.preventDefault();
            destino.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ==========================================================================
    // 3. ENLACE ACTIVO en el menú radial según sección visible
    // ==========================================================================
    var secciones = document.querySelectorAll('section[id]');
    var items     = document.querySelectorAll('.radial-item');

    function marcaActiva() {
        var actual = '';
        var scrollY = window.pageYOffset;

        secciones.forEach(function (s) {
            if (scrollY >= s.offsetTop - 120) {
                actual = s.getAttribute('id');
            }
        });

        items.forEach(function (item) {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + actual) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', marcaActiva);
    window.addEventListener('load',   marcaActiva);

    // ==========================================================================
    // 4. VALIDACIÓN DE FORMULARIO
    // ==========================================================================
    var formulario = document.getElementById('contact-form');

    if (formulario) {
        formulario.addEventListener('submit', function (e) {
            e.preventDefault();

            var nombre   = document.getElementById('nombre').value.trim();
            var email    = document.getElementById('email').value.trim();
            var telefono = document.getElementById('telefono').value.trim();
            var mensaje  = document.getElementById('mensaje').value.trim();

            if (!nombre || !email || !telefono || !mensaje) {
                alert('Por favor, complete todos los campos obligatorios.');
                return;
            }

            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingrese un email válido.');
                return;
            }

            var telefonoRegex = /^(\+?56)?[\s-]?[9][\s-]?[0-9]{4}[\s-]?[0-9]{4}$/;
            if (!telefonoRegex.test(telefono)) {
                alert('Por favor, ingrese un teléfono válido (formato: +56 9 XXXX XXXX).');
                return;
            }

            alert('Formulario recibido. En producción se enviará a su servidor.');
            formulario.reset();
        });
    }

})();
