	'use strict';

	;( function( $, window, document, undefined ){

		var $elements		= $( 'time[data-time]' );
		if( typeof TIMEBEFORE_NOW != 'undefined' )
			var strNow     = TIMEBEFORE_NOW,
		if( typeof TIMEBEFORE_MINUTE != 'undefined' )
			var strMinute  = TIMEBEFORE_MINUTE;
		if( typeof TIMEBEFORE_MINUTES != 'undefined' )
			var strMinutes = TIMEBEFORE_MINUTES;
		if( typeof TIMEBEFORE_HOUR != 'undefined' )
			var strHour    = TIMEBEFORE_HOUR;
		if( typeof TIMEBEFORE_HOURS != 'undefined' )
			var strHours   = TIMEBEFORE_HOURS;
		if( typeof TIMEBEFORE_YESTERDAY != 'undefined' )
			strYesterday	 = TIMEBEFORE_YESTERDAY;

			updateDates = function(){
				var now     = Math.round( new Date().getTime() / 1000 );
				$elements.each( function(){
					var $this	= $( this ),
						time    = $this.attr( 'data-time' ),
						diff    = now - time,
						out     = '';

					if( diff < 60 )
						out = strNow;

					else if( diff < 3600 )
						out = ( ( out = Math.round( diff / 60 ) ) == 1 ? strMinute : strMinutes ).replace( '{num}', out );

					else if( diff < 3600 * 24 )
						out = ( ( out = Math.round( diff / 3660 ) ) == 1 ? strHour : strHours ).replace( '{num}', out );

					else if( diff < 3600 * 24 * 2 )
						out = strYesterday;

					else
						out = $this.attr( 'title' );

					$this.text( out );

				});
				setTimeout( updateDates, 1000 * 60 );
			};

		setTimeout( updateDates, 1000 * 60 );

	})( jQuery, window, document );
