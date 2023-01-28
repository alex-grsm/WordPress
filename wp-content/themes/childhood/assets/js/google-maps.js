(function($) {

    /*
     *  new_map
     *
     *  Эта функция рендерит Google карту внутри выбранного jQuery элемента
     *
     *  @type	function
     *  @date	8/11/2013
     *  @since	4.3.0
     *
     *  @param	$el (jQuery элемент)
     *  @return	n/a
     */

    function new_map($el) {

      // Переменные
      var $markers = $el.find('.marker');


      // Переменные
      var args = {
        zoom: 16,
        center: new google.maps.LatLng(0, 0),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };


      // Создаем карту	        	
      var map = new google.maps.Map($el[0], args);


      // Создаем заготовку массива маркеров
      map.markers = [];


      // Добавляем маркеры
      $markers.each(function() {

        add_marker($(this), map);

      });


      // Центрируем карту
      center_map(map);


      // Возвращаем данные
      return map;

    }

    /*
     *  add_marker
     *
     *  Эта функция добавляет маркер на Google карту
     *
     *  @type	function
     *  @date	8/11/2013
     *  @since	4.3.0
     *
     *  @param	$marker (jQuery элемент)
     *  @param	map (Google Map object)
     *  @return	n/a
     */

    function add_marker($marker, map) {

      // Переменные
      var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));

      // Создаем маркер
      var marker = new google.maps.Marker({
        position: latlng,
        map: map
      });

      // Добавляем маркер в массив
      map.markers.push(marker);

      // Если маркер содержит HTML, добавим его в infoWindow
      if ($marker.html()) {
        // оздаем info window
        var infowindow = new google.maps.InfoWindow({
          content: $marker.html()
        });

        // Показываем info window при нажатии на маркер
        google.maps.event.addListener(marker, 'click', function() {

          infowindow.open(map, marker);

        });
      }

    }

    /*
     *  center_map
     *
     *  Эта функция центрирует карту и показывает все маркеры, прикрепленные к карте
     *
     *  @type	function
     *  @date	8/11/2013
     *  @since	4.3.0
     *
     *  @param	map (Google Map object)
     *  @return	n/a
     */

    function center_map(map) {

      // Переменные
      var bounds = new google.maps.LatLngBounds();

      // Перебираем все маркеры и создаем bounds
      $.each(map.markers, function(i, marker) {

        var latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());

        bounds.extend(latlng);

      });

      // Только 1 маркер?
      if (map.markers.length == 1) {
        // Центрируем карту
        map.setCenter(bounds.getCenter());
        map.setZoom(16);
      } else {
        // fit to bounds
        map.fitBounds(bounds);
      }

    }

    /*
     *  document ready
     *
     *  Эта функция рендерит каждую карту когда страница загружена
     *
     *  @type	function
     *  @date	8/11/2013
     *  @since	5.0.0
     *
     *  @param	n/a
     *  @return	n/a
     */
    // global var
    var map = null;

    $(document).ready(function() {

      $('.acf-map').each(function() {

        // Создаем карту
        map = new_map($(this));

      });

    });

  })(jQuery);