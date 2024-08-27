const onInit = () => {
    console.error('Hallo Module');
};


Hooks.on('init', onInit.bind(this));


