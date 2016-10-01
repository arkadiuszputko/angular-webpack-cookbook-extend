(function ()
{
    if (!this.__angular_wrapper_loaded__)
    {
        this.__angular_wrapper_loaded__ = true;
        require("angular");
    }

    module.exports = angular;
})();
