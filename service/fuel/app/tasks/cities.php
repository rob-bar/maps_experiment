<?php
namespace Fuel\Tasks;
class Cities {
	public static function run() {
		self::clean_db();
		\Config::load('cities.yml');
		foreach (\Config::get('cities') as $city) {
			if($city['has_coords'] == 1) {
				$city = \Model_City::forge(array(
					'name' => $city['name'],
					'lat' => $city['lat'],
					'lng' => $city['lng'],
				));
				$city->save();
			}
		}
	}

	public static function clean_db() {
		\Cli::write(\DBUtil::truncate_table('cities'));
	}
}