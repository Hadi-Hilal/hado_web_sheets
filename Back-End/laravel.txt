=========================================
*************LARAVEL NOTES***************
=========================================


-------@section and @stack in Blade:

@section: This directive is used to define a section of content in a Blade view. It allows you to define content blocks that can be overridden in child views using the @extends directive.
 Child views can provide specific content for each section defined in the parent view.

@stack: This directive is used to push content onto a named stack. It's often used in Blade templates to allow for appending content to a stack from different parts of the application. 
Unlike @section, @stack doesn't define the content directly. Instead, you can use @push to add content to a stack and later @stack to output the accumulated content. This can be useful for scenarios where you want to accumulate content across different parts of the application.

-------@stop in Blade:
The @stop directive is used to halt the execution of the Blade template when it's extended by another template. This is commonly used to prevent the template from rendering beyond the point where @stop is placed. Anything after the @stop directive will be ignored, and only the content defined in the parent template (using @section and similar directives) will be displayed.

-------Use of env() in Blade:
It's generally not recommended to use the env() function directly in Blade templates. The reason is that Blade templates are usually compiled and cached for performance reasons. 
When you use env() directly in a Blade template, the value from the .env file is read at the time of the template rendering. However, when you run php artisan config:cache, the configuration values are cached, including those fetched using env(). This means that changes to the .env file won't reflect in the cached configuration until you clear the cache.

Instead, as you mentioned, it's recommended to use the config() helper to access configuration values in Blade templates. This approach fetches configuration values directly from the configuration files, which are not affected by the config:cache command. Using config() ensures that your Blade templates consistently reflect the current configuration values without any caching issues. For example, config('app.name') will fetch the app.name configuration value.

--------@selected($model->active == 'active') this directive new in blade return selected 

--------@checked($model->active == 'active') this directive new in blade return checked

-------- <> mean not equal its same != but this better 

------- Category::destroy($id); its short for delete record

--------Category::destroy($id1 , $id2); its short for delete multi record

--------$request->route('id'):
In Laravel, you can access route parameters using the $request object.
If you have a route defined like /blog/show/{id}, you can retrieve the id parameter from the URL using $request->route('id').
For example, if the URL is /blog/show/123, $request->route('id') would return 123.


-------Route::is('admin.blogs.'):
Laravel allows you to check the current route's name using the Route::is method.
In this case, it's checking if the current route name starts with admin.blogs..
This is useful for conditional logic in your application, such as showing specific content or applying middleware based on the current route's name.
For example, if you have a route named admin.blogs.index, Route::is('admin.blogs.') would return true.

------- $categories->withQueryString()->links() 
this a method used to ensure that the current query parameters are included in the pagination links. This is useful when you have filters or search criteria in your page's URL,
 and you want to maintain those filters when navigating between pages with paginate.
NOTE: links('viewname') this function yake pagination view name  
or we can use  Paginator::defaultView('viewname'); in app service provider  

---- Local Scope:
In Laravel, local scopes are a way to define query constraints in your model that can be easily reused throughout your application. The example you provided defines a local scope named "publish" for a "Blog" model. This scope filters the query to only include records where the "publish" column is true. You can then use this scope in your controller to retrieve published blogs. 
   in model
   public function scopePublish($query)
    {
        return $query->where('publish', true);
    }
    in controller
    $blogs = Blog::publish()


------ withDefault method 
     public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id', 'id')
            ->withDefault([
                'name' => '-'
            ]);
    }
The code  provided represents a one-to-many relationship between two models, "Blog" and "Category." The "parent" method defines a "belongsTo" relationship where a "Blog" belongs to a "Category." The withDefault method is used to provide a default value for the "Category" in case the relationship returns null, helping prevent errors when accessing properties of a null object.



----------- withCount Method:
           ->withCount([
                'products as products_number' => function($query) {
                    $query->where('status', '=', 'active');
                }
            ])
            
The withCount method is used to retrieve the count of related records while also applying additional conditions to the count query. In your example, it counts the number of "products" related to a model (probably a different model) but only counts those with a "status" of "active" by using a closure function to specify the condition. The count result will be available as "products_number" when you access the relationship.

------------- $user->profile->fill( $request->all() )->save();
              
we can use fill method to fill the object with data instead of using create or update its do it twice

The save() method is then being used to save the changes to the database.



----------------https://symfony.com/doc/current/components/intl.html
The Symfony Intl component is a powerful tool for internationalization and localization in your PHP applications. It provides various functionalities for working with languages, countries, and regions, making it easier to support multiple languages and regions on your website. Here's how it works:
  how its work ?
  composer require symfony/intl

   use Symfony\Component\Intl\Countries;
   use Symfony\Component\Intl\Languages;
      'countries' => Countries::getNames('ar'), will return countries name in arabic
       'locales' => Languages::getNames(),


----------- https://yaireo.github.io/tagify/
Tagify is a JavaScript library that allows you to create tag input fields in web applications. It's a user-friendly way to let users input and manage tags, which are often used in various contexts such as categorization, filtering, and adding keywords to content. Here's a brief overview of how you can use Tagify:

------------$product->tags()->sync($tag_ids);
This method is used to synchronize the many-to-many relationship between the product and tags. It takes an array of tag_ids, which are the primary key values of the tags you want to associate with the product.

If a tag ID in the $tag_ids array is not already associated with the product, it will be attached to the product.
If a tag ID in the $tag_ids array is already associated with the product, it will remain associated.
If a tag ID that is associated with the product is not present in the $tag_ids array, it will be detached (removed) from the product.
In summary, $product->tags()->sync($tag_ids); is a convenient way to manage the many-to-many relationship between a product and its associated tags, ensuring that the relationship is updated based on the provided list of tag IDs. This is commonly used when you want to update the tags associated with a product based on user input or other factors.


------------$product->tags()->syncWithoutDetaching()
: This method synchronizes the many-to-many relationship between the product and tags, just like the sync method. However, it has one key difference:

If a tag ID in the $tag_ids array is not already associated with the product, it will be attached to the product.

If a tag ID in the $tag_ids array is already associated with the product, it will remain associated.

The important distinction is that syncWithoutDetaching will not detach (remove) any tags that are currently associated with the product but not present in the $tag_ids array. In other words, it only adds or updates records without removing any existing ones.

This method is useful when you want to ensure that you add or update tags without removing any existing tags that might not be included in the current synchronization operation




----- Diffrence between SMTP & POP3 
SMTP (Simple Mail Transfer Protocol): SMTP is used for sending outgoing emails. It is responsible for transferring emails from the sender's email client or server to the recipient's email server.
POP3 (Post Office Protocol version 3): POP3 is used for receiving incoming emails. It allows email clients to retrieve emails from the email server and store them on the recipient's device.











