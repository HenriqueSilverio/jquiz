define( [
    'jquery',
    'underscore',
    'backbone',
    'model/question'
], function( $, _, Backbone, Question ) {
    QUnit.module( 'Question Model' );

    QUnit.test( 'Model validations', function( assert ) {
        expect( 8 );

        var theQuestion = new Question( {
            question: 'How are you?',
            choices: [ '1', '2', '3', '4' ],
            answer: 0
        } );


        assert.ok( theQuestion.isValid(), 'A valid question model.' );


        theQuestion.set( 'question', 123 );
        assert.equal( false, theQuestion.isValid(), 'Only strings are allowed to be a question.' );


        theQuestion.set( 'question', '' );
        assert.equal( false, theQuestion.isValid(), 'An empty question is invalid.' );


        theQuestion.set( 'question', 'How are you?' ); // reset the valid question


        theQuestion.set( 'choices', 'Im not an array.' );
        assert.equal( false, theQuestion.isValid(), 'Choices must be an array.' );


        theQuestion.set( 'choices', [ 1 ] );
        assert.equal( false, theQuestion.isValid(), 'Questions needs at least four choices.' );


        theQuestion.set( 'choices', [ '1', '2', '3', '4' ] ); // reset the valid choices


        theQuestion.set( 'answer', 'Im not a number.' );
        assert.equal( false, theQuestion.isValid(), 'Answer must be an `integer-like`.' );


        theQuestion.set( 'answer', 4 );
        assert.equal( false, theQuestion.isValid(), 'Answer can not be greater than three.' );


        theQuestion.set( 'answer', -1 );
        assert.equal( false, theQuestion.isValid(), 'Answer can not be less than zero.' );
    } );
} );
