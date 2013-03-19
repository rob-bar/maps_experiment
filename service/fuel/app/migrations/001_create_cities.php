<?php

namespace Fuel\Migrations;

class Create_cities
{
	public function up()
	{
		\DBUtil::create_table('cities', array(
			'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true),
			'name' => array('constraint' => 255, 'type' => 'varchar', '0' => true),
			'lat' => array('constraint' => '10, 6', 'type' => 'float', '0' => true),
			'lng' => array('constraint' => '10, 6', 'type' => 'float', '0' => true),
		), array('id'));
	}

	public function down()
	{
		\DBUtil::drop_table('cities');
	}
}