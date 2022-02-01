import { Box3 } from '../math/Box3.js';
import { Light } from './Light.js';

class ReflectionProbe extends Light {

	constructor( box = new Box3(), texture ) {

		super();

		this.box = box;
		this.texture = texture;

	}

	copy( source ) {

		super.copy( source );

		this.box.copy( source.box );
		this.texture = source.texture;

		return this;

	}

	// TODO fromJSON/toJSON

}

ReflectionProbe.prototype.isReflectionProbe = true;

export { ReflectionProbe };
