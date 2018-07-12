let subscriptions = [];

module.exports = {
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        subscriptions.push({
            event: event,
            subscriber: subscriber,
            handler: handler
        });

        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        subscriptions = subscriptions.filter(function (subscription) {
            return subscription.event !== event || subscription.subscriber !== subscriber;
        });

        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        subscriptions.forEach(function (subscription) {
            if (event === subscription.event) {
                subscription.handler.call(subscription.subscriber);
            }
        });

        return this;
    }
};