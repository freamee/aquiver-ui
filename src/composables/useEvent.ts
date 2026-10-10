type NuiEventHandler<T = unknown> = (data: T) => void;

export function useEvent<T = unknown>(
    eventName: string,
    handler: NuiEventHandler<T>,
) {
    const eventHandler = (event: MessageEvent) => {
        const { action, data } = event.data ?? {};

        if (action !== eventName) {
            return;
        }

        handler(...data);
    };

    window.addEventListener("message", eventHandler);
}
