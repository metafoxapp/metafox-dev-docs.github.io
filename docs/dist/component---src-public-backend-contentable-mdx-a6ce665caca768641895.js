(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"wTj/":function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return i})),t.d(e,"default",(function(){return c}));var o=t("Fcif"),a=t("+I+c"),l=(t("mXGw"),t("/FXl")),r=t("TjRS"),i=(t("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/public/backend/contentable.mdx"}});var s={_frontmatter:i},u=r.a;function c(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(l.b)(u,Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"contentable"},"Contentable"),Object(l.b)("p",null,"This is an interface of a Contract Content. Example: Blog, Photo v.v..."),Object(l.b)("p",null,"A Contract Content always has user_id, user_type, owner_id, owner_type."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},"\nnamespace FoxSocial\\Platform\\Contracts;\n\nuse Illuminate\\Database\\Eloquent\\Builder;\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\nuse Illuminate\\Database\\Eloquent\\Relations\\MorphTo;\nuse Illuminate\\Support\\Collection;\n\ninterface Content extends Entity\n{\n    /**\n     * @return int\n     */\n    public function userId(): int;\n\n    /**\n     * @return string\n     */\n    public function userType(): string;\n\n    /**\n     * @return int\n     */\n    public function ownerId(): int;\n\n    /**\n     * @return string\n     */\n    public function ownerType(): string;\n\n    /**\n     * @return User|MorphTo\n     */\n    public function user();\n\n    /**\n     * @return UserEntity|BelongsTo\n     */\n    public function userEntity();\n\n    /**\n     * @return User|MorphTo\n     */\n    public function owner();\n\n    /**\n     * @return UserEntity|BelongsTo\n     */\n    public function ownerEntity();\n}\n\n")),Object(l.b)("h1",{id:"hasnestedattributes"},"HasNestedAttributes"),Object(l.b)("p",null,"Platform provides a trait to support quick saving relation data: FoxSocial\\Platform\\Traits\\Eloquent\\Model\\HasNestedAttributes"),Object(l.b)("p",null,"Example if you has Blog, Blog Category, Blog Tags. To quick save, define nestedAttributes the same name with relation."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},"use FoxSocial\\Platform\\Traits\\Eloquent\\Model\\HasNestedAttributes;\n\nclass Blog extends Model implements Content\n{\n    use HasNestedAttributes;\n\n    public $nestedAttributes = [\n        'categories',\n        'blog_text' => ['text', 'text_parsed'],\n    ];\n\n    public function categories(): BelongsToMany\n    {\n        // relation.\n    }\n\n    public function blog_text(): HasOne\n    {\n        // relation\n    }\n}\n\n")),Object(l.b)("p",null,"Usage"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},"$blog = new Blog();\n$blog->fill([\n    'title' => 'abc',\n    'categories' => [1, 2, 3],\n    'blog_text' => [\n\n    ]\n])\n$blog->save();\n")))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/public/backend/contentable.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-public-backend-contentable-mdx-a6ce665caca768641895.js.map